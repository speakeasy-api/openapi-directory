import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The success status of the AutomationRun. One of `running`, `success`, `partial_failure`, or `failure`.
 */
export declare enum AutomationRunEntityStatusEnum {
    Running = "running",
    Success = "success",
    PartialFailure = "partial_failure",
    Failure = "failure",
    Skipped = "skipped"
}
/**
 * List Automation Runs
 */
export declare class AutomationRunEntity extends SpeakeasyBase {
    /**
     * ID of the associated Automation.
     */
    automationId?: number;
    /**
     * Automation run completion/failure date/time.
     */
    completedAt?: Date;
    /**
     * Automation run start date/time.
     */
    createdAt?: Date;
    /**
     * ID.
     */
    id?: number;
    /**
     * The success status of the AutomationRun. One of `running`, `success`, `partial_failure`, or `failure`.
     */
    status?: AutomationRunEntityStatusEnum;
    /**
     * Link to status messages log file.
     */
    statusMessagesUrl?: string;
}
