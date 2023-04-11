import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
import { RobotStatusEnum } from "./robotstatusenum";
/**
 * Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 */
export declare class DescribeRobotResponse extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    arn?: string;
    createdAt?: Date;
    fleetArn?: string;
    greengrassGroupId?: string;
    lastDeploymentJob?: string;
    lastDeploymentTime?: Date;
    name?: string;
    status?: RobotStatusEnum;
    tags?: Record<string, string>;
}
