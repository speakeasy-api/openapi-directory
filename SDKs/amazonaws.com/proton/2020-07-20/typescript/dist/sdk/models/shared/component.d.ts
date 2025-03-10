import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentStatusEnum } from "./deploymentstatusenum";
/**
 * <p>Detailed data of an Proton component resource.</p> <p>For more information about components, see <a href="https://docs.aws.amazon.com/proton/latest/userguide/ag-components.html">Proton components</a> in the <i>Proton User Guide</i>.</p>
 */
export declare class Component extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    deploymentStatus: DeploymentStatusEnum;
    deploymentStatusMessage?: string;
    description?: string;
    environmentName: string;
    lastDeploymentAttemptedAt?: Date;
    lastDeploymentSucceededAt?: Date;
    lastModifiedAt: Date;
    name: string;
    serviceInstanceName?: string;
    serviceName?: string;
    serviceSpec?: string;
}
