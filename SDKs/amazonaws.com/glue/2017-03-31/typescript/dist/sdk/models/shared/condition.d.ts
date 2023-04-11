import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlStateEnum } from "./crawlstateenum";
import { JobRunStateEnum } from "./jobrunstateenum";
import { LogicalOperatorEnum } from "./logicaloperatorenum";
/**
 * Defines a condition under which a trigger fires.
 */
export declare class Condition extends SpeakeasyBase {
    crawlState?: CrawlStateEnum;
    crawlerName?: string;
    jobName?: string;
    logicalOperator?: LogicalOperatorEnum;
    state?: JobRunStateEnum;
}
