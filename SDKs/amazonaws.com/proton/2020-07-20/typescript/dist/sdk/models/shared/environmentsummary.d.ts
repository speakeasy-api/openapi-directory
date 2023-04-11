import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
import { ProvisioningEnum } from "./provisioningenum";
/**
 * Summary data of an Proton environment resource. An Proton environment is a set of resources shared across Proton services.
 */
export declare class EnvironmentSummary extends SpeakeasyBase {
    arn: string;
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
    templateMajorVersion: string;
    templateMinorVersion: string;
    templateName: string;
}
