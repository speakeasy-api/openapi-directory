import { SpeakeasyBase } from "../../../internal/utils";
import { Definition } from "./definition";
import { DeploymentTypeEnum } from "./deploymenttypeenum";
import { FailureHandlingPolicyEnum } from "./failurehandlingpolicyenum";
/**
 * Information about a deployment on an edge device that is registered with SageMaker Edge Manager.
 */
export declare class EdgeDeployment extends SpeakeasyBase {
    definitions?: Definition[];
    deploymentName?: string;
    failureHandlingPolicy?: FailureHandlingPolicyEnum;
    type?: DeploymentTypeEnum;
}
