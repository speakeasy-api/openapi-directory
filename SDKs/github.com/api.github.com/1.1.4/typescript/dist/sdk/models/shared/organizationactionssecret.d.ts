import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Visibility of a secret
 */
export declare enum OrganizationActionsSecretVisibilityEnum {
    All = "all",
    Private = "private",
    Selected = "selected"
}
/**
 * Secrets for GitHub Actions for an organization.
 */
export declare class OrganizationActionsSecret extends SpeakeasyBase {
    createdAt: Date;
    /**
     * The name of the secret.
     */
    name: string;
    selectedRepositoriesUrl?: string;
    updatedAt: Date;
    /**
     * Visibility of a secret
     */
    visibility: OrganizationActionsSecretVisibilityEnum;
}
