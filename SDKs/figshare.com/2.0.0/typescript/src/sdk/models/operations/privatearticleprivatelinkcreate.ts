import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticlePrivateLinkCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticlePrivateLinkCreateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticlePrivateLinkCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticlePrivateLinkCreatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PrivateLinkCreator;

  @SpeakeasyMetadata()
  security: PrivateArticlePrivateLinkCreateSecurity;
}


export class PrivateArticlePrivateLinkCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  location?: shared.Location;

  @SpeakeasyMetadata()
  statusCode: number;
}
