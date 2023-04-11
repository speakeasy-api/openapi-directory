import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConfidenceEnum } from "./confidenceenum";
/**
 * An inferred field.
 */
export declare class DetectedField extends SpeakeasyBase {
    confidence?: ConfidenceEnum;
    message?: string;
    value?: AttributeValue;
}
