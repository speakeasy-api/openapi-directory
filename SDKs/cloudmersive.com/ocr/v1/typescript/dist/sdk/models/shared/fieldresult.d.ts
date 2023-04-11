import { SpeakeasyBase } from "../../../internal/utils";
import { FormFieldDefinition } from "./formfielddefinition";
import { OcrPhotoTextElement } from "./ocrphototextelement";
/**
 * A pairing target field and actual value read from form
 */
export declare class FieldResult extends SpeakeasyBase {
    /**
     * Result field value(s) extracted
     */
    fieldValues?: OcrPhotoTextElement[];
    /**
     * Definition of a form field for OCR data extraction from images
     */
    targetField?: FormFieldDefinition;
}
