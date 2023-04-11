import { SpeakeasyBase } from "../../../internal/utils";
import { ContinuousDeploymentPolicyTypeEnum } from "./continuousdeploymentpolicytypeenum";
import { ContinuousDeploymentSingleHeaderConfig } from "./continuousdeploymentsingleheaderconfig";
import { ContinuousDeploymentSingleWeightConfig } from "./continuousdeploymentsingleweightconfig";
/**
 * The traffic configuration of your continuous deployment.
 */
export declare class TrafficConfig extends SpeakeasyBase {
    singleHeaderConfig?: ContinuousDeploymentSingleHeaderConfig;
    singleWeightConfig?: ContinuousDeploymentSingleWeightConfig;
    type: ContinuousDeploymentPolicyTypeEnum;
}
