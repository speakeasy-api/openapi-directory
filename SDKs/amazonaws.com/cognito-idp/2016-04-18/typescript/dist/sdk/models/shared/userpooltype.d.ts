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
import { StatusTypeEnum } from "./statustypeenum";
import { UserAttributeUpdateSettingsType } from "./userattributeupdatesettingstype";
import { UsernameAttributeTypeEnum } from "./usernameattributetypeenum";
import { UsernameConfigurationType } from "./usernameconfigurationtype";
import { UserPoolAddOnsType } from "./userpooladdonstype";
import { UserPoolMfaTypeEnum } from "./userpoolmfatypeenum";
import { UserPoolPolicyType } from "./userpoolpolicytype";
import { VerificationMessageTemplateType } from "./verificationmessagetemplatetype";
import { VerifiedAttributeTypeEnum } from "./verifiedattributetypeenum";
/**
 * A container for information about the user pool.
 */
export declare class UserPoolType extends SpeakeasyBase {
    accountRecoverySetting?: AccountRecoverySettingType;
    adminCreateUserConfig?: AdminCreateUserConfigType;
    aliasAttributes?: AliasAttributeTypeEnum[];
    arn?: string;
    autoVerifiedAttributes?: VerifiedAttributeTypeEnum[];
    creationDate?: Date;
    customDomain?: string;
    deletionProtection?: DeletionProtectionTypeEnum;
    deviceConfiguration?: DeviceConfigurationType;
    domain?: string;
    emailConfiguration?: EmailConfigurationType;
    emailConfigurationFailure?: string;
    emailVerificationMessage?: string;
    emailVerificationSubject?: string;
    estimatedNumberOfUsers?: number;
    id?: string;
    lambdaConfig?: LambdaConfigType;
    lastModifiedDate?: Date;
    mfaConfiguration?: UserPoolMfaTypeEnum;
    name?: string;
    policies?: UserPoolPolicyType;
    schemaAttributes?: SchemaAttributeType[];
    smsAuthenticationMessage?: string;
    smsConfiguration?: SmsConfigurationType;
    smsConfigurationFailure?: string;
    smsVerificationMessage?: string;
    status?: StatusTypeEnum;
    userAttributeUpdateSettings?: UserAttributeUpdateSettingsType;
    userPoolAddOns?: UserPoolAddOnsType;
    userPoolTags?: Record<string, string>;
    usernameAttributes?: UsernameAttributeTypeEnum[];
    usernameConfiguration?: UsernameConfigurationType;
    verificationMessageTemplate?: VerificationMessageTemplateType;
}
