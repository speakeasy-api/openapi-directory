import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfigurationUsage } from "./licenseconfigurationusage";
/**
 * Success
 */
export declare class ListUsageForLicenseConfigurationResponse extends SpeakeasyBase {
    licenseConfigurationUsageList?: LicenseConfigurationUsage[];
    nextToken?: string;
}
