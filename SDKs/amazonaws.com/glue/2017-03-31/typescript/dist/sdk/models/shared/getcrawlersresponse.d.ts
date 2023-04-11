import { SpeakeasyBase } from "../../../internal/utils";
import { Crawler } from "./crawler";
/**
 * Success
 */
export declare class GetCrawlersResponse extends SpeakeasyBase {
    crawlers?: Crawler[];
    nextToken?: string;
}
