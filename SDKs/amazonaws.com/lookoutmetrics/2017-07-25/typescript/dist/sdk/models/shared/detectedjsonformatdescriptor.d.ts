import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedField } from "./detectedfield";
/**
 * A detected JSON format descriptor.
 */
export declare class DetectedJsonFormatDescriptor extends SpeakeasyBase {
    charset?: DetectedField;
    fileCompression?: DetectedField;
}
