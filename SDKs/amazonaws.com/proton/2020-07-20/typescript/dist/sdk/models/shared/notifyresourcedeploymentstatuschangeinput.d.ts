import { SpeakeasyBase } from "../../../internal/utils";
import { Output } from "./output";
import { ResourceDeploymentStatusEnum } from "./resourcedeploymentstatusenum";
export declare class NotifyResourceDeploymentStatusChangeInput extends SpeakeasyBase {
    deploymentId?: string;
    outputs?: Output[];
    resourceArn: string;
    status?: ResourceDeploymentStatusEnum;
    statusMessage?: string;
}
