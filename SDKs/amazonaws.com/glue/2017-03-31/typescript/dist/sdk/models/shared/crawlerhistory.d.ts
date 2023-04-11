import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlerHistoryStateEnum } from "./crawlerhistorystateenum";
/**
 * Contains the information for a run of a crawler.
 */
export declare class CrawlerHistory extends SpeakeasyBase {
    crawlId?: string;
    dpuHour?: number;
    endTime?: Date;
    errorMessage?: string;
    logGroup?: string;
    logStream?: string;
    messagePrefix?: string;
    startTime?: Date;
    state?: CrawlerHistoryStateEnum;
    summary?: string;
}
