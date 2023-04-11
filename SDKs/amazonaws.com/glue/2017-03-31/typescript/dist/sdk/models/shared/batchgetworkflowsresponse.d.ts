import { SpeakeasyBase } from "../../../internal/utils";
import { Workflow } from "./workflow";
/**
 * Success
 */
export declare class BatchGetWorkflowsResponse extends SpeakeasyBase {
    missingWorkflows?: string[];
    workflows?: Workflow[];
}
