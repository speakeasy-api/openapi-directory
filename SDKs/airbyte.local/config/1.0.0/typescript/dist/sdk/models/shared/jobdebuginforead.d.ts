import { SpeakeasyBase } from "../../../internal/utils";
import { AttemptInfoRead } from "./attemptinforead";
import { JobDebugRead } from "./jobdebugread";
import { WorkflowStateRead } from "./workflowstateread";
/**
 * Successful operation
 */
export declare class JobDebugInfoRead extends SpeakeasyBase {
    attempts: AttemptInfoRead[];
    job: JobDebugRead;
    workflowState?: WorkflowStateRead;
}
