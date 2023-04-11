import { SpeakeasyBase } from "../../../internal/utils";
import { ContentNewsArticleRssItem } from "./contentnewsarticlerssitem";
export declare class ContentNewsArticleRssResponse extends SpeakeasyBase {
    categoryFilter?: string;
    currentPaginationToken?: number;
    newsArticles?: ContentNewsArticleRssItem[];
    nextPaginationToken?: number;
    resultCountThisPage?: number;
}
