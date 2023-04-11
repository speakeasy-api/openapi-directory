import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConfigurationAssociation } from "./licenseconfigurationassociation";
/**
 * Success
 */
export declare class ListAssociationsForLicenseConfigurationResponse extends SpeakeasyBase {
    licenseConfigurationAssociations?: LicenseConfigurationAssociation[];
    nextToken?: string;
}
