import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleVersionUpdateThumbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=version_id" })
  versionId: number;
}


export class ArticleVersionUpdateThumbSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth2: shared.SchemeOAuth2;
}


export class ArticleVersionUpdateThumbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleVersionUpdateThumbPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FileId;

  @SpeakeasyMetadata()
  security: ArticleVersionUpdateThumbSecurity;
}


export class ArticleVersionUpdateThumbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorMessage?: shared.ErrorMessage;

  @SpeakeasyMetadata()
  headers: Record<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
