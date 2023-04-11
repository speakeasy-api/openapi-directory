import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentAttribute } from "./documentattribute";
/**
 * Identifies a document for which to retrieve status information
 */
export declare class DocumentInfo extends SpeakeasyBase {
    attributes?: DocumentAttribute[];
    documentId: string;
}
