import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of repositories in the organization that the secret is visible to
 */
export declare enum CodespacesSecretVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
/**
 * Secrets for a GitHub Codespace.
 */
export declare class CodespacesSecret extends SpeakeasyBase {
    /**
     * The date and time at which the secret was created, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    createdAt: Date;
    /**
     * The name of the secret
     */
    name: string;
    /**
     * The API URL at which the list of repositories this secret is visible to can be retrieved
     */
    selectedRepositoriesUrl: string;
    /**
     * The date and time at which the secret was last updated, in ISO 8601 format':' YYYY-MM-DDTHH:MM:SSZ.
     */
    updatedAt: Date;
    /**
     * The type of repositories in the organization that the secret is visible to
     */
    visibility: CodespacesSecretVisibilityEnum;
}
