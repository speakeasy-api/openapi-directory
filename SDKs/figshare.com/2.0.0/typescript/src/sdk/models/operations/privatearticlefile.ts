import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateArticleFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class PrivateArticleFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateArticleFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateArticleFilePathParams;

  @SpeakeasyMetadata()
  security: PrivateArticleFileSecurity;
}


export class PrivateArticleFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  privateFile?: shared.PrivateFile;

  @SpeakeasyMetadata()
  statusCode: number;
}
