import { SpeakeasyBase } from "../../../internal/utils";
export declare class ScimUserEmails extends SpeakeasyBase {
    primary?: boolean;
    type?: string;
    value: string;
}
export declare class ScimUserGroups extends SpeakeasyBase {
    display?: string;
    value?: string;
}
export declare class ScimUserMeta extends SpeakeasyBase {
    created?: Date;
    lastModified?: Date;
    location?: string;
    resourceType?: string;
}
export declare class ScimUserName extends SpeakeasyBase {
    familyName?: string;
    formatted?: string;
    givenName?: string;
}
export declare enum ScimUserOperationsOpEnum {
    Add = "add",
    Remove = "remove",
    Replace = "replace"
}
export declare class ScimUserOperations extends SpeakeasyBase {
    op: ScimUserOperationsOpEnum;
    path?: string;
    value?: any;
}
export declare class ScimUserRoles extends SpeakeasyBase {
    display?: string;
    primary?: boolean;
    type?: string;
    value?: string;
}
/**
 * SCIM /Users provisioning endpoints
 */
export declare class ScimUser extends SpeakeasyBase {
    /**
     * The active status of the User.
     */
    active: boolean;
    /**
     * The name of the user, suitable for display to end-users
     */
    displayName?: string;
    /**
     * user emails
     */
    emails: ScimUserEmails[];
    /**
     * The ID of the User.
     */
    externalId?: string;
    /**
     * associated groups
     */
    groups?: ScimUserGroups[];
    /**
     * Unique identifier of an external identity
     */
    id: string;
    meta: ScimUserMeta;
    name?: ScimUserName;
    /**
     * Set of operations to be performed
     */
    operations?: ScimUserOperations[];
    /**
     * The ID of the organization.
     */
    organizationId?: number;
    roles?: ScimUserRoles[];
    /**
     * SCIM schema used.
     */
    schemas: string[];
    /**
     * Configured by the admin. Could be an email, login, or username
     */
    userName?: string;
}
