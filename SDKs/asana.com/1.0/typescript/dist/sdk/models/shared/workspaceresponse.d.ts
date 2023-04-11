import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export declare class WorkspaceResponse extends SpeakeasyBase {
    /**
     * The email domains that are associated with this workspace.
     */
    emailDomains?: string[];
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * Whether the workspace is an *organization*.
     */
    isOrganization?: boolean;
    /**
     * The name of the workspace.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
