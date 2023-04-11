import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
/**
 * Summary data of a linked repository—a repository that has been registered with Proton.
 */
export declare class RepositorySummary extends SpeakeasyBase {
    arn: string;
    name: string;
    provider: RepositoryProviderEnum;
}
