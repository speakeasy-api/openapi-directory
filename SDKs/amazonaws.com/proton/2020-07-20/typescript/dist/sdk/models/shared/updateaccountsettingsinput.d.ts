import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryBranchInput } from "./repositorybranchinput";
export declare class UpdateAccountSettingsInput extends SpeakeasyBase {
    deletePipelineProvisioningRepository?: boolean;
    pipelineCodebuildRoleArn?: string;
    pipelineProvisioningRepository?: RepositoryBranchInput;
    pipelineServiceRoleArn?: string;
}
