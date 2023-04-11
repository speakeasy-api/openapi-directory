import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
/**
 * Organization Invitation
 */
export declare class OrganizationInvitation extends SpeakeasyBase {
    createdAt: string;
    email: string;
    failedAt?: string;
    failedReason?: string;
    id: number;
    invitationSource?: string;
    invitationTeamsUrl: string;
    /**
     * A GitHub user.
     */
    inviter: SimpleUser;
    login: string;
    nodeId: string;
    role: string;
    teamCount: number;
}
