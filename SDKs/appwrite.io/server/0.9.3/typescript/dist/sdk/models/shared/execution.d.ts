import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Execution
 */
export declare class Execution extends SpeakeasyBase {
    /**
     * Execution ID.
     */
    dollarId: string;
    /**
     * The execution creation date in Unix timestamp.
     */
    dateCreated: number;
    /**
     * The script exit code.
     */
    exitCode: number;
    /**
     * Function ID.
     */
    functionId: string;
    /**
     * The status of the function execution. Possible values can be: `waiting`, `processing`, `completed`, or `failed`.
     */
    status: string;
    /**
     * The script stderr output string. Logs the last 4,000 characters of the execution stderr output
     */
    stderr: string;
    /**
     * The script stdout output string. Logs the last 4,000 characters of the execution stdout output.
     */
    stdout: string;
    /**
     * The script execution time in seconds.
     */
    time: number;
    /**
     * The trigger that caused the function to execute. Possible values can be: `http`, `schedule`, or `event`.
     */
    trigger: string;
}
