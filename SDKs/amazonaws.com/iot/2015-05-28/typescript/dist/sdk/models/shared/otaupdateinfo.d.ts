import { SpeakeasyBase } from "../../../internal/utils";
import { AwsJobExecutionsRolloutConfig } from "./awsjobexecutionsrolloutconfig";
import { AwsJobPresignedUrlConfig } from "./awsjobpresignedurlconfig";
import { ErrorInfo } from "./errorinfo";
import { OTAUpdateFile } from "./otaupdatefile";
import { OTAUpdateStatusEnum } from "./otaupdatestatusenum";
import { ProtocolEnum } from "./protocolenum";
import { TargetSelectionEnum } from "./targetselectionenum";
/**
 * Information about an OTA update.
 */
export declare class OTAUpdateInfo extends SpeakeasyBase {
    additionalParameters?: Record<string, string>;
    awsIotJobArn?: string;
    awsIotJobId?: string;
    awsJobExecutionsRolloutConfig?: AwsJobExecutionsRolloutConfig;
    awsJobPresignedUrlConfig?: AwsJobPresignedUrlConfig;
    creationDate?: Date;
    description?: string;
    errorInfo?: ErrorInfo;
    lastModifiedDate?: Date;
    otaUpdateArn?: string;
    otaUpdateFiles?: OTAUpdateFile[];
    otaUpdateId?: string;
    otaUpdateStatus?: OTAUpdateStatusEnum;
    protocols?: ProtocolEnum[];
    targetSelection?: TargetSelectionEnum;
    targets?: string[];
}
