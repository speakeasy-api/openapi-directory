import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlerHistory } from "./crawlerhistory";
/**
 * Success
 */
export declare class ListCrawlsResponse extends SpeakeasyBase {
    crawls?: CrawlerHistory[];
    nextToken?: string;
}
