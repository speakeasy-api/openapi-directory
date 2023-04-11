import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseConversionContext } from "./licenseconversioncontext";
export declare class CreateLicenseConversionTaskForResourceRequest extends SpeakeasyBase {
    destinationLicenseContext: LicenseConversionContext;
    resourceArn: string;
    sourceLicenseContext: LicenseConversionContext;
}
