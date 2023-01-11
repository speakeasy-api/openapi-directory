import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;
}


export class ArticleDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleDetailsPathParams;
}


export class ArticleDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleComplete?: shared.ArticleComplete;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
