import { SpeakeasyBase } from "../../../internal/utils";
import { CEStateEnum } from "./cestateenum";
import { CEStatusEnum } from "./cestatusenum";
import { CETypeEnum } from "./cetypeenum";
import { ComputeResource } from "./computeresource";
import { EksConfiguration } from "./eksconfiguration";
import { OrchestrationTypeEnum } from "./orchestrationtypeenum";
import { UpdatePolicy } from "./updatepolicy";
/**
 * An object that represents an Batch compute environment.
 */
export declare class ComputeEnvironmentDetail extends SpeakeasyBase {
    computeEnvironmentArn: string;
    computeEnvironmentName: string;
    computeResources?: ComputeResource;
    containerOrchestrationType?: OrchestrationTypeEnum;
    ecsClusterArn?: string;
    eksConfiguration?: EksConfiguration;
    serviceRole?: string;
    state?: CEStateEnum;
    status?: CEStatusEnum;
    statusReason?: string;
    tags?: Record<string, string>;
    type?: CETypeEnum;
    unmanagedvCpus?: number;
    updatePolicy?: UpdatePolicy;
    uuid?: string;
}
