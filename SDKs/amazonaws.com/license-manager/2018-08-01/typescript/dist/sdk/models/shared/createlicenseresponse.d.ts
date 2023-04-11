import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseStatusEnum } from "./licensestatusenum";
/**
 * Success
 */
export declare class CreateLicenseResponse extends SpeakeasyBase {
    licenseArn?: string;
    status?: LicenseStatusEnum;
    version?: string;
}
