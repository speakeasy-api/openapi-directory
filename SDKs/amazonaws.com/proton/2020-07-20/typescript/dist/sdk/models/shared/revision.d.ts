import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
/**
 * Revision detail data for a commit and push that activates a sync attempt
 */
export declare class Revision extends SpeakeasyBase {
    branch: string;
    directory: string;
    repositoryName: string;
    repositoryProvider: RepositoryProviderEnum;
    sha: string;
}
