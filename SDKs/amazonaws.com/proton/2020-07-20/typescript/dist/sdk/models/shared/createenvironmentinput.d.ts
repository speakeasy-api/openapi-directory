import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryBranchInput } from "./repositorybranchinput";
import { Tag } from "./tag";
export declare class CreateEnvironmentInput extends SpeakeasyBase {
    codebuildRoleArn?: string;
    componentRoleArn?: string;
    description?: string;
    environmentAccountConnectionId?: string;
    name: string;
    protonServiceRoleArn?: string;
    provisioningRepository?: RepositoryBranchInput;
    spec: string;
    tags?: Tag[];
    templateMajorVersion: string;
    templateMinorVersion?: string;
    templateName: string;
}
