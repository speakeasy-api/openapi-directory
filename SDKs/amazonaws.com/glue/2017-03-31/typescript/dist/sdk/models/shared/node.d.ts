import { SpeakeasyBase } from "../../../internal/utils";
import { CrawlerNodeDetails } from "./crawlernodedetails";
import { JobNodeDetails } from "./jobnodedetails";
import { NodeTypeEnum } from "./nodetypeenum";
import { TriggerNodeDetails } from "./triggernodedetails";
/**
 * A node represents an Glue component (trigger, crawler, or job) on a workflow graph.
 */
export declare class Node extends SpeakeasyBase {
    crawlerDetails?: CrawlerNodeDetails;
    jobDetails?: JobNodeDetails;
    name?: string;
    triggerDetails?: TriggerNodeDetails;
    type?: NodeTypeEnum;
    uniqueId?: string;
}
