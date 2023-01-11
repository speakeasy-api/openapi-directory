import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleVersionEmbargoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=v_number" })
  vNumber: number;
}


export class ArticleVersionEmbargoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleVersionEmbargoPathParams;
}


export class ArticleVersionEmbargoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleEmbargo?: shared.ArticleEmbargo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
