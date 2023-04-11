import { SpeakeasyBase } from "../../../internal/utils";
import { SynchronousJobRead } from "./synchronousjobread";
export declare enum CheckConnectionReadStatusEnum {
    Succeeded = "succeeded",
    Failed = "failed"
}
/**
 * Successful operation
 */
export declare class CheckConnectionRead extends SpeakeasyBase {
    jobInfo: SynchronousJobRead;
    message?: string;
    status: CheckConnectionReadStatusEnum;
}
