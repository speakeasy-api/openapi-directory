import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a column within a table for OCR data extraction from images
 */
export declare class FormTableColumnDefinition extends SpeakeasyBase {
    /**
     * Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits
     */
    allowNumericDigits?: boolean;
    /**
     * Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match).  Default is Partial.
     */
    anchorMode?: string;
    /**
     * The identifier of the field; use this to identify which field is being referenced
     */
    columnID?: string;
    /**
     * The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)
     */
    dataType?: string;
    /**
     * Optional - the target number of digits in the field; useful for fixed-length fields
     */
    minimumCharacterCount?: number;
    /**
     * Optional - the top anchor of the column heading
     */
    topAnchor?: string;
}
