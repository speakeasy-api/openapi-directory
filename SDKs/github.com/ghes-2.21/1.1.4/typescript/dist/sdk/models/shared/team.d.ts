import { SpeakeasyBase } from "../../../internal/utils";
import { NullableTeamSimple } from "./nullableteamsimple";
export declare class TeamPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain: boolean;
    pull: boolean;
    push: boolean;
    triage: boolean;
}
/**
 * Groups of organization members that gives permissions on specified repositories.
 */
export declare class Team extends SpeakeasyBase {
    description: string;
    htmlUrl: string;
    id: number;
    membersUrl: string;
    name: string;
    nodeId: string;
    /**
     * Groups of organization members that gives permissions on specified repositories.
     */
    parent: NullableTeamSimple;
    permission: string;
    permissions?: TeamPermissions;
    privacy?: string;
    repositoriesUrl: string;
    slug: string;
    url: string;
}
