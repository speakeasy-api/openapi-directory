import { SpeakeasyBase } from "../../../internal/utils";
import { VerifiedAttributeTypeEnum } from "./verifiedattributetypeenum";
/**
 * The settings for updates to user attributes. These settings include the property <code>AttributesRequireVerificationBeforeUpdate</code>, a user-pool setting that tells Amazon Cognito how to handle changes to the value of your users' email address and phone number attributes. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-email-phone-verification.html#user-pool-settings-verifications-verify-attribute-updates"> Verifying updates to email addresses and phone numbers</a>.
 */
export declare class UserAttributeUpdateSettingsType extends SpeakeasyBase {
    attributesRequireVerificationBeforeUpdate?: VerifiedAttributeTypeEnum[];
}
