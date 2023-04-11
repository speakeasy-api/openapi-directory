import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
 */
export declare class TeamResponseOrganization extends SpeakeasyBase {
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * The name of the workspace.
     */
    name?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
}
/**
 * The visibility of the team to users in the same organization
 *
 * @remarks
 *
 */
export declare enum TeamResponseVisibilityEnum {
    Secret = "secret",
    RequestToJoin = "request_to_join",
    Public = "public"
}
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
 */
export declare class TeamResponse extends SpeakeasyBase {
    /**
     * [Opt In](/docs/input-output-options). The description of the team.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * Globally unique identifier of the resource, as a string.
     */
    gid?: string;
    /**
     * [Opt In](/docs/input-output-options). The description of the team with formatting as HTML.
     *
     * @remarks
     *
     */
    htmlDescription?: string;
    /**
     * The name of the team.
     */
    name?: string;
    organization?: TeamResponseOrganization;
    /**
     * A url that points directly to the object within Asana.
     */
    permalinkUrl?: string;
    /**
     * The base type of this resource.
     */
    resourceType?: string;
    /**
     * The visibility of the team to users in the same organization
     *
     * @remarks
     *
     */
    visibility?: TeamResponseVisibilityEnum;
}
