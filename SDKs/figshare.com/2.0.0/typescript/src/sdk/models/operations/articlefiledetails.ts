import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleFileDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=file_id" })
  fileId: number;
}


export class ArticleFileDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleFileDetailsPathParams;
}


export class ArticleFileDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicFile?: shared.PublicFile;

  @SpeakeasyMetadata()
  statusCode: number;
}
