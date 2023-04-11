import { SpeakeasyBase } from "../../../internal/utils";
import { UnprocessedErrorCodeEnum } from "./unprocessederrorcodeenum";
/**
 *  Provides details about a security control for which a response couldn't be returned.
 */
export declare class UnprocessedSecurityControl extends SpeakeasyBase {
    errorCode: UnprocessedErrorCodeEnum;
    errorReason?: string;
    securityControlId: string;
}
