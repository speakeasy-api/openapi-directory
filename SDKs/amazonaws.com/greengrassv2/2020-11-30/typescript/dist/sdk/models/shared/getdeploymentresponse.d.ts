import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentDeploymentSpecification } from "./componentdeploymentspecification";
import { DeploymentIoTJobConfiguration } from "./deploymentiotjobconfiguration";
import { DeploymentPolicies } from "./deploymentpolicies";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * Success
 */
export declare class GetDeploymentResponse extends SpeakeasyBase {
    components?: Record<string, ComponentDeploymentSpecification>;
    creationTimestamp?: Date;
    deploymentId?: string;
    deploymentName?: string;
    deploymentPolicies?: DeploymentPolicies;
    deploymentStatus?: DeploymentStatusEnum;
    iotJobArn?: string;
    iotJobConfiguration?: DeploymentIoTJobConfiguration;
    iotJobId?: string;
    isLatestForTarget?: boolean;
    parentTargetArn?: string;
    revisionId?: string;
    tags?: Record<string, string>;
    targetArn?: string;
}
