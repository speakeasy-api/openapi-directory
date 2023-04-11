import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlsFilter } from "./crawlsfilter";
export declare class ListCrawlsRequest extends SpeakeasyBase {
    crawlerName: string;
    filters?: CrawlsFilter[];
    maxResults?: number;
    nextToken?: string;
}
