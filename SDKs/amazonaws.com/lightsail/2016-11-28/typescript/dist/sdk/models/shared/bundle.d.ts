import { SpeakeasyBase } from "../../../internal/utils";
import { AppCategoryEnum } from "./appcategoryenum";
import { InstancePlatformEnum } from "./instanceplatformenum";
/**
 * Describes a bundle, which is a set of specs describing your virtual private server (or <i>instance</i>).
 */
export declare class Bundle extends SpeakeasyBase {
    bundleId?: string;
    cpuCount?: number;
    diskSizeInGb?: number;
    instanceType?: string;
    isActive?: boolean;
    name?: string;
    power?: number;
    price?: number;
    ramSizeInGb?: number;
    supportedAppCategories?: AppCategoryEnum[];
    supportedPlatforms?: InstancePlatformEnum[];
    transferPerMonthInGb?: number;
}
