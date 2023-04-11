import { SpeakeasyBase } from "../../../internal/utils";
import { FieldResult } from "./fieldresult";
import { TableResult } from "./tableresult";
/**
 * The result of extracting form field values
 */
export declare class FormRecognitionResult extends SpeakeasyBase {
    /**
     * Optional; populated when using photo/recognize/form/advanced with the Setting Name of the best-matching highest-relevance form
     */
    bestMatchFormSettingName?: string;
    /**
     * Diagnostic images - default is null, enable diagnostics=true to populate this parameter with one image per field
     */
    diagnostics?: string[];
    /**
     * Result of form field OCR data extraction
     */
    fieldValueExtractionResult?: FieldResult[];
    /**
     * True if the operation was successful, false otherwise
     */
    successful?: boolean;
    /**
     * Result of form table OCR data extraction
     */
    tableValueExtractionResults?: TableResult[];
}
