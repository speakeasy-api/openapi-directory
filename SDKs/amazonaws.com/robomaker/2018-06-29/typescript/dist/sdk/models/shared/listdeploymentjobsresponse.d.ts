import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentJob } from "./deploymentjob";
/**
 * Support for the AWS RoboMaker application deployment feature has ended. For additional information, see https://docs.aws.amazon.com/robomaker/latest/dg/fleets.html.
 */
export declare class ListDeploymentJobsResponse extends SpeakeasyBase {
    deploymentJobs?: DeploymentJob[];
    nextToken?: string;
}
