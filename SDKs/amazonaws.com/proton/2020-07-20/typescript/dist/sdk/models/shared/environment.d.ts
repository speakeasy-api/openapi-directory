import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ProvisioningEnum } from "./provisioningenum";
import { RepositoryBranch } from "./repositorybranch";
/**
 * Detailed data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.
 */
export declare class Environment extends SpeakeasyBase {
    arn: string;
    codebuildRoleArn?: string;
    componentRoleArn?: string;
    createdAt: Date;
    deploymentStatus: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
    environmentAccountConnectionId?: string;
    environmentAccountId?: string;
    lastDeploymentAttemptedAt: Date;
    lastDeploymentSucceededAt: Date;
    name: string;
    protonServiceRoleArn?: string;
    provisioning?: ProvisioningEnum;
    provisioningRepository?: RepositoryBranch;
    spec?: string;
    templateMajorVersion: string;
    templateMinorVersion: string;
    templateName: string;
}
