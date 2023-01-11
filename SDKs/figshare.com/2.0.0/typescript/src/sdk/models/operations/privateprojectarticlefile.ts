import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateProjectArticleFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class PrivateProjectArticleFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateProjectArticleFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateProjectArticleFilePathParams;

  @SpeakeasyMetadata()
  security: PrivateProjectArticleFileSecurity;
}


export class PrivateProjectArticleFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  privateFile?: shared.PrivateFile;

  @SpeakeasyMetadata()
  statusCode: number;
}
