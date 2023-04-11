import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about a repository that will be cloned to a Dev Environment.
 */
export declare class RepositoryInput extends SpeakeasyBase {
    branchName?: string;
    repositoryName: string;
}
