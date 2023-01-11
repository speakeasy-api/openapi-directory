import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ArticlesSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ArticleSearch;
}


export class ArticlesSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.Article })
  articles?: shared.Article[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
