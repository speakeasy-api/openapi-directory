import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticlePrivateLinkPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticlePrivateLinkSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticlePrivateLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticlePrivateLinkPathParams;

  @SpeakeasyMetadata()
  security: PrivateArticlePrivateLinkSecurity;
}


export class PrivateArticlePrivateLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.PrivateLink })
  privateLinks?: shared.PrivateLink[];

  @SpeakeasyMetadata()
  statusCode: number;
}
