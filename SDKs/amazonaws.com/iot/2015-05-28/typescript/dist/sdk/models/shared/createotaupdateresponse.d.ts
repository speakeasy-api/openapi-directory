import { SpeakeasyBase } from "../../../internal/utils";
import { OTAUpdateStatusEnum } from "./otaupdatestatusenum";
/**
 * Success
 */
export declare class CreateOTAUpdateResponse extends SpeakeasyBase {
    awsIotJobArn?: string;
    awsIotJobId?: string;
    otaUpdateArn?: string;
    otaUpdateId?: string;
    otaUpdateStatus?: OTAUpdateStatusEnum;
}
