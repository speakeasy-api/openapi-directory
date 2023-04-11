import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ModelStateEnum } from "./modelstateenum";
/**
 * <p/>
 */
export declare class DeploymentModel extends SpeakeasyBase {
    desiredState?: ModelStateEnum;
    modelHandle?: string;
    modelName?: string;
    modelVersion?: string;
    rollbackFailureReason?: string;
    state?: ModelStateEnum;
    status?: DeploymentStatusEnum;
    statusReason?: string;
}
