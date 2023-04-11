import { SpeakeasyBase } from "../../../internal/utils";
import { DeploymentUpdateTypeEnum } from "./deploymentupdatetypeenum";
import { RepositoryBranchInput } from "./repositorybranchinput";
export declare class UpdateEnvironmentInput extends SpeakeasyBase {
    codebuildRoleArn?: string;
    componentRoleArn?: string;
    deploymentType: DeploymentUpdateTypeEnum;
    description?: string;
    environmentAccountConnectionId?: string;
    name: string;
    protonServiceRoleArn?: string;
    provisioningRepository?: RepositoryBranchInput;
    spec?: string;
    templateMajorVersion?: string;
    templateMinorVersion?: string;
}
