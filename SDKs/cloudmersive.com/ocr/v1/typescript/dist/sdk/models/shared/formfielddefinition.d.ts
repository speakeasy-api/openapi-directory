import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Definition of a form field for OCR data extraction from images
 */
export declare class FormFieldDefinition extends SpeakeasyBase {
    /**
     * Optional - set to false to block values that contain numeric digits, set to true to allow numeric digits
     */
    allowNumericDigits?: boolean;
    /**
     * Optional - alterate match text for the specified anchor
     */
    alternateAnchor?: string;
    /**
     * Optional - the matching mode for the anchor.  Possible values are Complete (requires the entire anchor to match) and Partial (allows only part of the anchor to match) and Horizontal (anchor must be laid out horizontally).  Default is Partial.
     */
    anchorMode?: string;
    /**
     * Optional - the bottom anchor of the field
     */
    bottomAnchor?: string;
    /**
     * The data type of the field; possible values are INTEGER (Integer value), STRING (Arbitrary string value, spaces are permitted), DATE (Date in a structured format), DECIMAL (Decimal number), ALPHANUMERIC (Continuous alphanumeric string with no spaces), STRINGNOWHITESPACE (A string that contains no whitespace characters), SERIALNUMBER (A serial-number style string that contains letters and numbers, and certain symbols; must contain at least one number), ALPHAONLY (Alphabet characters only, no numbers or symbols or whitespace)
     */
    dataType?: string;
    /**
     * The identifier of the field; use this to identify which field is being referenced.  Set to SkipField if you do not wish to return the value of this field in the result.
     */
    fieldID?: string;
    /**
     * Horizontal alignment of target value area relative to the field anchor; Possible values are Left, Right
     */
    horizontalAlignmentType?: string;
    /**
     * Optional - Ignore any result items that contain a partial or complete match with these text strings
     */
    ignore?: string[];
    /**
     * Optional - the left-hand anchor of the field
     */
    leftAnchor?: string;
    /**
     * Optional - the target number of digits in the field; useful for fixed-length fields
     */
    minimumCharacterCount?: number;
    /**
     * Optional - additional options that can be set for this field definition, separated by commas.  Possible values are AllowMultiMatch (allow the same anchor to be matched to multiple fields)
     */
    options?: string;
    /**
     * Optional - the target number of digits in the field; useful for fixed-length fields
     */
    targetDigitCount?: number;
    /**
     * Optional - scale factor for target field height - relative to height of field title
     */
    targetFieldHeightRelative?: number;
    /**
     * Optional - horizontal adjestment in relative width of the field
     */
    targetFieldHorizontalAdjustment?: number;
    /**
     * Optional - vertical adjestment in relative height of the field
     */
    targetFieldVerticalAdjustment?: number;
    /**
     * Optional - scale factor for target field width - relative to width of field title; a value of 1.0 indicates the target value area has the same width as the field value as occurring in the image; a value of 2.0 would indicate that the target value area has 2 times the width of the field value as occurring in the image.
     */
    targetFieldWidthRelative?: number;
    /**
     * Optional - the top anchor of the field
     */
    topAnchor?: string;
    /**
     * Vertical alignment of target value area relative to the field anchor; Possible values are VCenter, Top, Bottom
     */
    verticalAlignmentType?: string;
}
