import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentItem } from "./attachmentitem";
import { ChatItemTypeEnum } from "./chatitemtypeenum";
import { MessageMetadata } from "./messagemetadata";
import { ParticipantRoleEnum } from "./participantroleenum";
/**
 * An item - message or event - that has been sent.
 */
export declare class Item extends SpeakeasyBase {
    absoluteTime?: string;
    attachments?: AttachmentItem[];
    contactId?: string;
    content?: string;
    contentType?: string;
    displayName?: string;
    id?: string;
    messageMetadata?: MessageMetadata;
    participantId?: string;
    participantRole?: ParticipantRoleEnum;
    relatedContactId?: string;
    type?: ChatItemTypeEnum;
}
