import { SpeakeasyBase } from "../../../internal/utils";
import { CloudFormationTarget } from "./cloudformationtarget";
import { DeploymentTargetTypeEnum } from "./deploymenttargettypeenum";
import { ECSTarget } from "./ecstarget";
import { InstanceTarget } from "./instancetarget";
import { LambdaTarget } from "./lambdatarget";
/**
 *  Information about the deployment target.
 */
export declare class DeploymentTarget extends SpeakeasyBase {
    /**
     *  Information about the target to be updated by an CloudFormation blue/green deployment. This target type is used for all deployments initiated by a CloudFormation stack update.
     */
    cloudFormationTarget?: CloudFormationTarget;
    deploymentTargetType?: DeploymentTargetTypeEnum;
    ecsTarget?: ECSTarget;
    instanceTarget?: InstanceTarget;
    lambdaTarget?: LambdaTarget;
}
