import { SpeakeasyBase } from "../../../internal/utils";
import { DeprecatedStatusEnum } from "./deprecatedstatusenum";
import { LoggingConfig } from "./loggingconfig";
import { ProvisioningTypeEnum } from "./provisioningtypeenum";
import { RegistryTypeEnum } from "./registrytypeenum";
import { RequiredActivatedType } from "./requiredactivatedtype";
import { TypeTestsStatusEnum } from "./typetestsstatusenum";
import { VisibilityEnum } from "./visibilityenum";
/**
 * Success
 */
export declare class DescribeTypeOutput extends SpeakeasyBase {
    arn?: string;
    autoUpdate?: boolean;
    configurationSchema?: string;
    defaultVersionId?: string;
    deprecatedStatus?: DeprecatedStatusEnum;
    description?: string;
    documentationUrl?: string;
    executionRoleArn?: string;
    isActivated?: boolean;
    isDefaultVersion?: boolean;
    lastUpdated?: Date;
    latestPublicVersion?: string;
    loggingConfig?: LoggingConfig;
    originalTypeArn?: string;
    originalTypeName?: string;
    provisioningType?: ProvisioningTypeEnum;
    publicVersionNumber?: string;
    publisherId?: string;
    requiredActivatedTypes?: RequiredActivatedType[];
    schema?: string;
    sourceUrl?: string;
    timeCreated?: Date;
    type?: RegistryTypeEnum;
    typeName?: string;
    typeTestsStatus?: TypeTestsStatusEnum;
    typeTestsStatusDescription?: string;
    visibility?: VisibilityEnum;
}
