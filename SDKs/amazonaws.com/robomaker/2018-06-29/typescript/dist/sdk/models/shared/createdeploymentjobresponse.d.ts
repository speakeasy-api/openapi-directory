import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentApplicationConfig } from "./deploymentapplicationconfig";
import { DeploymentConfig } from "./deploymentconfig";
import { DeploymentJobErrorCodeEnum } from "./deploymentjoberrorcodeenum";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 */
export declare class CreateDeploymentJobResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    deploymentApplicationConfigs?: DeploymentApplicationConfig[];
    deploymentConfig?: DeploymentConfig;
    failureCode?: DeploymentJobErrorCodeEnum;
    failureReason?: string;
    fleet?: string;
    status?: DeploymentStatusEnum;
    tags?: Record<string, string>;
}
