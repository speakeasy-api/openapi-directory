import { SpeakeasyBase } from "../../../internal/utils";
import { FailedItemErrorCodeEnum } from "./faileditemerrorcodeenum";
export declare class FailedItemDetails extends SpeakeasyBase {
    failureCode?: FailedItemErrorCodeEnum;
    retryable?: boolean;
}
