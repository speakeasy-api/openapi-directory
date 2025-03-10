import { SpeakeasyBase } from "../../../internal/utils";
import { AttachmentsSource } from "./attachmentssource";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentRequires } from "./documentrequires";
import { DocumentTypeEnum } from "./documenttypeenum";
import { Tag } from "./tag";
export declare class CreateDocumentRequest extends SpeakeasyBase {
    attachments?: AttachmentsSource[];
    content: string;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentType?: DocumentTypeEnum;
    name: string;
    requires?: DocumentRequires[];
    tags?: Tag[];
    targetType?: string;
    versionName?: string;
}
