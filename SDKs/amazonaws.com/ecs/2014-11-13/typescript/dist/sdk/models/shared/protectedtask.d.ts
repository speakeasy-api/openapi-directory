import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An object representing the protection status details for a task. You can set the protection status with the <a>UpdateTaskProtection</a> API and get the status of tasks with the <a>GetTaskProtection</a> API.
 */
export declare class ProtectedTask extends SpeakeasyBase {
    expirationDate?: Date;
    protectionEnabled?: boolean;
    taskArn?: string;
}
