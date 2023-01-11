import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticlesSearchRequest extends SpeakeasyBase {
    request?: shared.ArticleSearch;
}
export declare class ArticlesSearchResponse extends SpeakeasyBase {
    articles?: shared.Article[];
    contentType: string;
    statusCode: number;
}
