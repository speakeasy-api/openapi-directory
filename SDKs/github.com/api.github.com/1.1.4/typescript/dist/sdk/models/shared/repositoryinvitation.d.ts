import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * The permission associated with the invitation.
 */
export declare enum RepositoryInvitationPermissionsEnum {
    Read = "read",
    Write = "write",
    Admin = "admin",
    Triage = "triage",
    Maintain = "maintain"
}
/**
 * Repository invitations let you manage who you collaborate with.
 */
export declare class RepositoryInvitation extends SpeakeasyBase {
    createdAt: Date;
    /**
     * Whether or not the invitation has expired
     */
    expired?: boolean;
    htmlUrl: string;
    /**
     * Unique identifier of the repository invitation.
     */
    id: number;
    /**
     * A GitHub user.
     */
    invitee: NullableSimpleUser;
    /**
     * A GitHub user.
     */
    inviter: NullableSimpleUser;
    nodeId: string;
    /**
     * The permission associated with the invitation.
     */
    permissions: RepositoryInvitationPermissionsEnum;
    /**
     * Minimal Repository
     */
    repository: MinimalRepository;
    /**
     * URL for the repository invitation
     */
    url: string;
}
