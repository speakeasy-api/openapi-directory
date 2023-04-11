import { SpeakeasyBase } from "../../../internal/utils";
import { NullableTeamSimple } from "./nullableteamsimple";
import { OrganizationFull } from "./organizationfull";
/**
 * The level of privacy this team should have
 */
export declare enum TeamFullPrivacyEnum {
    Closed = "closed",
    Secret = "secret"
}
/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export declare class TeamFull extends SpeakeasyBase {
    createdAt: Date;
    description: string;
    htmlUrl: string;
    /**
     * Unique identifier of the team
     */
    id: number;
    /**
     * Distinguished Name (DN) that team maps to within LDAP environment
     */
    ldapDn?: string;
    membersCount: number;
    membersUrl: string;
    /**
     * Name of the team
     */
    name: string;
    nodeId: string;
    /**
     * Organization Full
     */
    organization: OrganizationFull;
    /**
     * Groups of organization members that gives permissions on specified repositories.
     */
    parent?: NullableTeamSimple;
    /**
     * Permission that the team will have for its repositories
     */
    permission: string;
    /**
     * The level of privacy this team should have
     */
    privacy?: TeamFullPrivacyEnum;
    reposCount: number;
    repositoriesUrl: string;
    slug: string;
    updatedAt: Date;
    /**
     * URL for the team
     */
    url: string;
}
