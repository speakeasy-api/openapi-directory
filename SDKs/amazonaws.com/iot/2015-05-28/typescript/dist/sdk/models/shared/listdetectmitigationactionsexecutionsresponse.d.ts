import { SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionExecution } from "./detectmitigationactionexecution";
/**
 * Success
 */
export declare class ListDetectMitigationActionsExecutionsResponse extends SpeakeasyBase {
    actionsExecutions?: DetectMitigationActionExecution[];
    nextToken?: string;
}
