import { SpeakeasyBase } from "../../../internal/utils";
export declare class DocumentReference extends SpeakeasyBase {
    /**
     * Identifies whether the document is active and used for checks.
     */
    active?: boolean;
    /**
     * Your description for the document.
     */
    description?: string;
    /**
     * Document name.
     */
    fileName?: string;
    /**
     * The unique identifier of the resource.
     */
    id?: string;
    /**
     * The modification date of the document.
     */
    modificationDate?: Date;
    /**
     * Type of document, used when providing an ID number or uploading a document.
     */
    type?: string;
}
