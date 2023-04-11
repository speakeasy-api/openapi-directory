import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentContent } from "./attachmentcontent";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentRequires } from "./documentrequires";
import { DocumentStatusEnum } from "./documentstatusenum";
import { DocumentTypeEnum } from "./documenttypeenum";
import { ReviewStatusEnum } from "./reviewstatusenum";
/**
 * Success
 */
export declare class GetDocumentResult extends SpeakeasyBase {
    attachmentsContent?: AttachmentContent[];
    content?: string;
    createdDate?: Date;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentType?: DocumentTypeEnum;
    documentVersion?: string;
    name?: string;
    requires?: DocumentRequires[];
    reviewStatus?: ReviewStatusEnum;
    status?: DocumentStatusEnum;
    statusInformation?: string;
    versionName?: string;
}
