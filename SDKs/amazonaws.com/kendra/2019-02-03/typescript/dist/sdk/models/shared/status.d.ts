import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentStatusEnum } from "./documentstatusenum";
/**
 * Provides information about the status of documents submitted for indexing.
 */
export declare class Status extends SpeakeasyBase {
    documentId?: string;
    documentStatus?: DocumentStatusEnum;
    failureCode?: string;
    failureReason?: string;
}
