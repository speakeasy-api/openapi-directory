import { SpeakeasyBase } from "../../../internal/utils";
import { DkimAttributes } from "./dkimattributes";
import { IdentityTypeEnum } from "./identitytypeenum";
import { MailFromAttributes } from "./mailfromattributes";
import { Tag } from "./tag";
import { VerificationStatusEnum } from "./verificationstatusenum";
/**
 * Details about an email identity.
 */
export declare class GetEmailIdentityResponse extends SpeakeasyBase {
    configurationSetName?: string;
    dkimAttributes?: DkimAttributes;
    feedbackForwardingStatus?: boolean;
    identityType?: IdentityTypeEnum;
    mailFromAttributes?: MailFromAttributes;
    policies?: Record<string, string>;
    tags?: Tag[];
    verificationStatus?: VerificationStatusEnum;
    verifiedForSendingStatus?: boolean;
}
