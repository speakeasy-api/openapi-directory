import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceShareInvitationStatusEnum } from "./resourceshareinvitationstatusenum";
/**
 * Describes an invitation to join a resource share.
**/
export declare class ResourceShareInvitation extends SpeakeasyBase {
    invitationTimestamp?: Date;
    receiverAccountId?: string;
    receiverArn?: string;
    resourceShareArn?: string;
    resourceShareAssociations?: Record<string, any>;
    resourceShareInvitationArn?: string;
    resourceShareName?: string;
    senderAccountId?: string;
    status?: ResourceShareInvitationStatusEnum;
}
