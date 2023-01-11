import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleVersionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class ArticleVersionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleVersionsPathParams;
}


export class ArticleVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.ArticleVersions })
  articleVersions?: shared.ArticleVersions[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
