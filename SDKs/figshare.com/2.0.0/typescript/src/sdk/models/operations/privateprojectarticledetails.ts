import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PrivateProjectArticleDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class PrivateProjectArticleDetailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class PrivateProjectArticleDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PrivateProjectArticleDetailsPathParams;

  @SpeakeasyMetadata()
  security: PrivateProjectArticleDetailsSecurity;
}


export class PrivateProjectArticleDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  projectArticle?: shared.ProjectArticle;

  @SpeakeasyMetadata()
  statusCode: number;
}
