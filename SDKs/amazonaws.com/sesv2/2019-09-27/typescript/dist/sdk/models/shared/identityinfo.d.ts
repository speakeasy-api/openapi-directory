import { SpeakeasyBase } from "../../../internal/utils";
import { IdentityTypeEnum } from "./identitytypeenum";
import { VerificationStatusEnum } from "./verificationstatusenum";
/**
 * Information about an email identity.
 */
export declare class IdentityInfo extends SpeakeasyBase {
    identityName?: string;
    identityType?: IdentityTypeEnum;
    sendingEnabled?: boolean;
    verificationStatus?: VerificationStatusEnum;
}
