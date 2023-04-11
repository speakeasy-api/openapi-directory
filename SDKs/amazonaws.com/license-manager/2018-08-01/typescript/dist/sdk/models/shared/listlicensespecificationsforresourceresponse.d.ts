import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseSpecification } from "./licensespecification";
/**
 * Success
 */
export declare class ListLicenseSpecificationsForResourceResponse extends SpeakeasyBase {
    licenseSpecifications?: LicenseSpecification[];
    nextToken?: string;
}
