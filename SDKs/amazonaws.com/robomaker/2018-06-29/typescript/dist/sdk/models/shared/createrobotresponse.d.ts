import { SpeakeasyBase } from "../../../internal/utils";
import { ArchitectureEnum } from "./architectureenum";
/**
 * AWS RoboMaker is unable to process this request as the support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 */
export declare class CreateRobotResponse extends SpeakeasyBase {
    architecture?: ArchitectureEnum;
    arn?: string;
    createdAt?: Date;
    greengrassGroupId?: string;
    name?: string;
    tags?: Record<string, string>;
}
