import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CheckOperationReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Successful operation
 */
export declare class CheckOperationRead extends SpeakeasyBase {
    message?: string;
    status: CheckOperationReadStatusEnum;
}
