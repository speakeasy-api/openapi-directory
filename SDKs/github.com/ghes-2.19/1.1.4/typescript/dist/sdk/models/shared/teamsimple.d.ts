import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export declare class TeamSimple extends SpeakeasyBase {
    /**
     * Description of the team
     */
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
    membersUrl: string;
    /**
     * Name of the team
     */
    name: string;
    nodeId: string;
    /**
     * Permission that the team will have for its repositories
     */
    permission: string;
    /**
     * The level of privacy this team should have
     */
    privacy?: string;
    repositoriesUrl: string;
    slug: string;
    /**
     * URL for the team
     */
    url: string;
}
