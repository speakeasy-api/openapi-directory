import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentFormatEnum } from "./documentformatenum";
import { DocumentStatusEnum } from "./documentstatusenum";
import { ReviewStatusEnum } from "./reviewstatusenum";
/**
 * Version information about the document.
 */
export declare class DocumentVersionInfo extends SpeakeasyBase {
    createdDate?: Date;
    displayName?: string;
    documentFormat?: DocumentFormatEnum;
    documentVersion?: string;
    isDefaultVersion?: boolean;
    name?: string;
    reviewStatus?: ReviewStatusEnum;
    status?: DocumentStatusEnum;
    statusInformation?: string;
    versionName?: string;
}
