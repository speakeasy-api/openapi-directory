import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
/**
 * Detail input data for a linked repository branch.
 */
export declare class RepositoryBranchInput extends SpeakeasyBase {
    branch: string;
    name: string;
    provider: RepositoryProviderEnum;
}
