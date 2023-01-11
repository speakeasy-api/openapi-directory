import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticleVersionConfidentialityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=article_id" })
  articleId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=v_number" })
  vNumber: number;
}


export class ArticleVersionConfidentialityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ArticleVersionConfidentialityPathParams;
}


export class ArticleVersionConfidentialityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  articleConfidentiality?: shared.ArticleConfidentiality;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
