import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The organization/workspace the team belongs to.
 *
**/
export declare class TeamResponseOrganization extends SpeakeasyBase {
    gid?: string;
    name?: string;
    resourceType?: string;
}
/**
 * A *team* is used to group related projects and people together within an organization. Each project in an organization is associated with a team.
**/
export declare class TeamResponse extends SpeakeasyBase {
    description?: string;
    gid?: string;
    htmlDescription?: string;
    name?: string;
    organization?: TeamResponseOrganization;
    permalinkUrl?: string;
    resourceType?: string;
}
