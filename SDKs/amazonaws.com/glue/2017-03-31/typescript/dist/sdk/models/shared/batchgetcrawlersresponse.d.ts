import { SpeakeasyBase } from "../../../internal/utils";
import { Crawler } from "./crawler";
/**
 * Success
 */
export declare class BatchGetCrawlersResponse extends SpeakeasyBase {
    crawlers?: Crawler[];
    crawlersNotFound?: string[];
}
