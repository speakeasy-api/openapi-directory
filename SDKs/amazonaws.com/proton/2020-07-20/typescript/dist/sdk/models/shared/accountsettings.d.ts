import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryBranch } from "./repositorybranch";
/**
 * Proton settings that are used for multiple services in the Amazon Web Services account.
 */
export declare class AccountSettings extends SpeakeasyBase {
    pipelineCodebuildRoleArn?: string;
    pipelineProvisioningRepository?: RepositoryBranch;
    pipelineServiceRoleArn?: string;
}
