import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleUploadInitiatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class PrivateArticleUploadInitiateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleUploadInitiateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleUploadInitiatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FileCreator;

  @SpeakeasyMetadata()
  security: PrivateArticleUploadInitiateSecurity;
}


export class PrivateArticleUploadInitiateResponse extends SpeakeasyBase {
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
