import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentClass } from "./documentclass";
import { DocumentLabel } from "./documentlabel";
import { DocumentMetadata } from "./documentmetadata";
import { DocumentTypeListItem } from "./documenttypelistitem";
import { ErrorsListItem } from "./errorslistitem";
/**
 * Success
 */
export declare class ClassifyDocumentResponse extends SpeakeasyBase {
    classes?: DocumentClass[];
    documentMetadata?: DocumentMetadata;
    documentType?: DocumentTypeListItem[];
    errors?: ErrorsListItem[];
    labels?: DocumentLabel[];
}
