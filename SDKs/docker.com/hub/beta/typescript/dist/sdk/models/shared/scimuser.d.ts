import { SpeakeasyBase } from "../../../internal/utils";
import { ScimEmail } from "./scimemail";
import { ScimGroup } from "./scimgroup";
import { ScimUserName } from "./scimusername";
export declare class ScimUserMeta extends SpeakeasyBase {
    /**
     * The creation date for the user as a RFC3339 formatted string.
     */
    created?: string;
    /**
     * The date the user was last modified as a RFC3339 formatted string.
     */
    lastModified?: string;
    location?: string;
    resourceType?: string;
}
export declare class ScimUser extends SpeakeasyBase {
    active?: boolean;
    /**
     * The username in Docker. Also known as the "Docker ID".
     */
    displayName?: string;
    emails?: ScimEmail[];
    groups?: ScimGroup[];
    /**
     * The unique identifier for the user. A v4 UUID.
     */
    id?: string;
    meta?: ScimUserMeta;
    name?: ScimUserName;
    schemas?: string[];
    /**
     * The user's email address. This must be reachable via email.
     */
    userName?: string;
}
