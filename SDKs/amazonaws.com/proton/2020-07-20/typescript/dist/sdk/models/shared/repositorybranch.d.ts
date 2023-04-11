import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
/**
 * Detail data for a linked repository branch.
 */
export declare class RepositoryBranch extends SpeakeasyBase {
    arn: string;
    branch: string;
    name: string;
    provider: RepositoryProviderEnum;
}
