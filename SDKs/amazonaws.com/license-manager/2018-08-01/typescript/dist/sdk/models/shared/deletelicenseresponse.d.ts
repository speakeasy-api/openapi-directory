import { SpeakeasyBase } from "../../../internal/utils";
import { LicenseDeletionStatusEnum } from "./licensedeletionstatusenum";
/**
 * Success
 */
export declare class DeleteLicenseResponse extends SpeakeasyBase {
    deletionDate?: string;
    status?: LicenseDeletionStatusEnum;
}
