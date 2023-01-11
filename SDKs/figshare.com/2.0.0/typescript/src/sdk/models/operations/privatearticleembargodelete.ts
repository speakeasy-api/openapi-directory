import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleEmbargoDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleEmbargoDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleEmbargoDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleEmbargoDeletePathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleEmbargoDeleteSecurity;
}


export class PrivateArticleEmbargoDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
