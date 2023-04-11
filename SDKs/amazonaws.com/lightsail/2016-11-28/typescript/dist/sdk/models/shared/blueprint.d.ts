import { SpeakeasyBase } from "../../../internal/utils";
import { AppCategoryEnum } from "./appcategoryenum";
import { BlueprintTypeEnum } from "./blueprinttypeenum";
import { InstancePlatformEnum } from "./instanceplatformenum";
/**
 * Describes a blueprint (a virtual private server image).
 */
export declare class Blueprint extends SpeakeasyBase {
    appCategory?: AppCategoryEnum;
    blueprintId?: string;
    description?: string;
    group?: string;
    isActive?: boolean;
    licenseUrl?: string;
    minPower?: number;
    name?: string;
    platform?: InstancePlatformEnum;
    productUrl?: string;
    type?: BlueprintTypeEnum;
    version?: string;
    versionCode?: string;
}
