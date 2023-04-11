import { SpeakeasyBase } from "../../../internal/utils";
import { AccountRecoverySettingType } from "./accountrecoverysettingtype";
import { AdminCreateUserConfigType } from "./admincreateuserconfigtype";
import { AliasAttributeTypeEnum } from "./aliasattributetypeenum";
import { DeletionProtectionTypeEnum } from "./deletionprotectiontypeenum";
import { DeviceConfigurationType } from "./deviceconfigurationtype";
import { EmailConfigurationType } from "./emailconfigurationtype";
import { LambdaConfigType } from "./lambdaconfigtype";
import { SchemaAttributeType } from "./schemaattributetype";
import { SmsConfigurationType } from "./smsconfigurationtype";
import { UserAttributeUpdateSettingsType } from "./userattributeupdatesettingstype";
import { UsernameAttributeTypeEnum } from "./usernameattributetypeenum";
import { UsernameConfigurationType } from "./usernameconfigurationtype";
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { UserPoolPolicyType } from "./userpoolpolicytype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
import { VerifiedAttributeTypeEnum } from "./verifiedattributetypeenum";
/**
 * Represents the request to create a user pool.
 */
export declare class CreateUserPoolRequest extends SpeakeasyBase {
    accountRecoverySetting?: AccountRecoverySettingType;
    adminCreateUserConfig?: AdminCreateUserConfigType;
    aliasAttributes?: AliasAttributeTypeEnum[];
    autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];
    deletionProtection?: DeletionProtectionTypeEnum;
    deviceConfiguration?: DeviceConfigurationType;
    emailConfiguration?: EmailConfigurationType;
    emailVerificationMessage?: string;
    emailVerificationSubject?: string;
    lambdaConfig?: LambdaConfigType;
    mfaConfiguration?: UserPoolMfaTypeEnum;
    policies?: UserPoolPolicyType;
    poolName: string;
    schema?: SchemaAttributeType[];
    smsAuthenticationMessage?: string;
    smsConfiguration?: SmsConfigurationType;
    smsVerificationMessage?: string;
    userAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
    userPoolAddOns?: UserPoolAddOnsType;
    userPoolTags?: Record<string, string>;
    usernameAttributes?: UsernameAttributeTypeEnum[];
    usernameConfiguration?: UsernameConfigurationType;
    verificationMessageTemplate?: VerificationMessageTemplateType;
}
