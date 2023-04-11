import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The status of the import/export job
 */
export declare enum IssueJobStatusStatusEnum {
    Accepted = "ACCEPTED",
    Started = "STARTED",
    Running = "RUNNING",
    Failure = "FAILURE"
}
/**
 * The status of an import or export job
 */
export declare class IssueJobStatus extends SpeakeasyBase {
    /**
     * The total number of issues already imported/exported
     */
    count?: number;
    /**
     * The percentage of issues already imported/exported
     */
    pct?: number;
    /**
     * The phase of the import/export job
     */
    phase?: string;
    /**
     * The status of the import/export job
     */
    status?: IssueJobStatusStatusEnum;
    /**
     * The total number of issues being imported/exported
     */
    total?: number;
    type?: string;
}
