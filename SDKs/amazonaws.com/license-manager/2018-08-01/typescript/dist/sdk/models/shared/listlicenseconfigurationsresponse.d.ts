import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfiguration } from "./licenseconfiguration";
/**
 * Success
 */
export declare class ListLicenseConfigurationsResponse extends SpeakeasyBase {
    licenseConfigurations?: LicenseConfiguration[];
    nextToken?: string;
}
