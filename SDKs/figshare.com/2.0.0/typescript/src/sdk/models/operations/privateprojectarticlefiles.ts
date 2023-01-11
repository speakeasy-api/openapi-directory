import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateProjectArticleFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class PrivateProjectArticleFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateProjectArticleFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateProjectArticleFilesPathParams;

  @SpeakeasyMetadata()
  security: PrivateProjectArticleFilesSecurity;
}


export class PrivateProjectArticleFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata({ elemType: shared.PrivateFile })
  privateFiles?: shared.PrivateFile[];

  @SpeakeasyMetadata()
  statusCode: number;
}
