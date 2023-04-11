import { SpeakeasyBase } from "../../../internal/utils";
import { FreeTrialInfoErrorCodeEnum } from "./freetrialinfoerrorcodeenum";
/**
 * Information about an error received while accessing free trail data for an account.
 */
export declare class FreeTrialInfoError extends SpeakeasyBase {
    accountId: string;
    code: FreeTrialInfoErrorCodeEnum;
    message: string;
}
