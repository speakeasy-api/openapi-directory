import { SpeakeasyBase } from "../../../internal/utils";
import { AccountRecoverySettingType } from "./accountrecoverysettingtype";
import { AdminCreateUserConfigType } from "./admincreateuserconfigtype";
import { DeletionProtectionTypeEnum } from "./deletionprotectiontypeenum";
import { DeviceConfigurationType } from "./deviceconfigurationtype";
import { EmailConfigurationType } from "./emailconfigurationtype";
import { LambdaConfigType } from "./lambdaconfigtype";
import { SmsConfigurationType } from "./smsconfigurationtype";
import { UserAttributeUpdateSettingsType } from "./userattributeupdatesettingstype";
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { UserPoolPolicyType } from "./userpoolpolicytype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
import { VerifiedAttributeTypeEnum } from "./verifiedattributetypeenum";
/**
 * Represents the request to update the user pool.
 */
export declare class UpdateUserPoolRequest extends SpeakeasyBase {
    accountRecoverySetting?: AccountRecoverySettingType;
    adminCreateUserConfig?: AdminCreateUserConfigType;
    autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];
    deletionProtection?: DeletionProtectionTypeEnum;
    deviceConfiguration?: DeviceConfigurationType;
    emailConfiguration?: EmailConfigurationType;
    emailVerificationMessage?: string;
    emailVerificationSubject?: string;
    lambdaConfig?: LambdaConfigType;
    mfaConfiguration?: UserPoolMfaTypeEnum;
    policies?: UserPoolPolicyType;
    smsAuthenticationMessage?: string;
    smsConfiguration?: SmsConfigurationType;
    smsVerificationMessage?: string;
    userAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
    userPoolAddOns?: UserPoolAddOnsType;
    userPoolId: string;
    userPoolTags?: Record<string, string>;
    verificationMessageTemplate?: VerificationMessageTemplateType;
}
