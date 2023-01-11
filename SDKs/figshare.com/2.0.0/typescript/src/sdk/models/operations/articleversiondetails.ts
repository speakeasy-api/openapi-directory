import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleVersionDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=v_number" })
  vNumber: number;
}


export class ArticleVersionDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleVersionDetailsPathParams;
}


export class ArticleVersionDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleComplete?: shared.ArticleComplete;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
