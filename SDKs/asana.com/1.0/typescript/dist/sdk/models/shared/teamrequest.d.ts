import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The visibility of the team to users in the same organization
 *
 * @remarks
 *
 */
export declare enum TeamRequestVisibilityEnum {
    Secret = "secret",
    RequestToJoin = "request_to_join",
    Public = "public"
}
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
 */
export declare class TeamRequestInput extends SpeakeasyBase {
    /**
     * The description of the team.
     *
     * @remarks
     *
     */
    description?: string;
    /**
     * The description of the team with formatting as HTML.
     *
     * @remarks
     *
     */
    htmlDescription?: string;
    /**
     * The name of the team.
     */
    name?: string;
    /**
     * The organization/workspace the team belongs to. This must be the same organization you are in and cannot be changed once set.
     *
     * @remarks
     *
     */
    organization?: string;
    /**
     * The visibility of the team to users in the same organization
     *
     * @remarks
     *
     */
    visibility?: TeamRequestVisibilityEnum;
}
