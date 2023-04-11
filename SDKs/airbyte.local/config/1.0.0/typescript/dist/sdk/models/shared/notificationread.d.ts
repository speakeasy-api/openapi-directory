import { SpeakeasyBase } from "../../../internal/utils";
export declare enum NotificationReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Successful operation
 */
export declare class NotificationRead extends SpeakeasyBase {
    message?: string;
    status: NotificationReadStatusEnum;
}
