import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareAssociation } from "./resourceshareassociation";
import { ResourceShareInvitationStatusEnum } from "./resourceshareinvitationstatusenum";
/**
 * Describes an invitation for an Amazon Web Services account to join a resource share.
 */
export declare class ResourceShareInvitation extends SpeakeasyBase {
    invitationTimestamp?: Date;
    receiverAccountId?: string;
    receiverArn?: string;
    resourceShareArn?: string;
    resourceShareAssociations?: ResourceShareAssociation[];
    resourceShareInvitationArn?: string;
    resourceShareName?: string;
    senderAccountId?: string;
    status?: ResourceShareInvitationStatusEnum;
}
