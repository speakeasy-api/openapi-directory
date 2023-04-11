import { SpeakeasyBase } from "../../../internal/utils";
import { DetectMitigationActionsTaskSummary } from "./detectmitigationactionstasksummary";
/**
 * Success
 */
export declare class ListDetectMitigationActionsTasksResponse extends SpeakeasyBase {
    nextToken?: string;
    tasks?: DetectMitigationActionsTaskSummary[];
}
