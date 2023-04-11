import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { Robot } from "./robot";
/**
 * Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 */
export declare class DescribeFleetResponse extends SpeakeasyBase {
    arn?: string;
    createdAt?: Date;
    lastDeploymentJob?: string;
    lastDeploymentStatus?: DeploymentStatusEnum;
    lastDeploymentTime?: Date;
    name?: string;
    robots?: Robot[];
    tags?: Record<string, string>;
}
