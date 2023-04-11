import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { ResourceStatus } from "./resourcestatus";
import { StatusEnum } from "./statusenum";
/**
 * An object with details on why an account failed to enable Amazon Inspector.
 */
export declare class FailedAccount extends SpeakeasyBase {
    accountId: string;
    errorCode: ErrorCodeEnum;
    errorMessage: string;
    resourceStatus?: ResourceStatus;
    status?: StatusEnum;
}
