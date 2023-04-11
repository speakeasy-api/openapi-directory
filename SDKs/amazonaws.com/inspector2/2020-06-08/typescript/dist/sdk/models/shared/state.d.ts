import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
import { StatusEnum } from "./statusenum";
/**
 * An object that described the state of Amazon Inspector scans for an account.
 */
export declare class State extends SpeakeasyBase {
    errorCode: ErrorCodeEnum;
    errorMessage: string;
    status: StatusEnum;
}
