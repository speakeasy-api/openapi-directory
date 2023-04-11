import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
import { ErrorDetail } from "./errordetail";
/**
 * Success
 */
export declare class GetDeploymentStatusResponse extends SpeakeasyBase {
    deploymentStatus?: string;
    deploymentType?: DeploymentTypeEnum;
    errorDetails?: ErrorDetail[];
    errorMessage?: string;
    updatedAt?: string;
}
