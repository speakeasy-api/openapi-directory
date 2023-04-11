import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedField } from "./detectedfield";
/**
 * Properties of an inferred CSV format.
 */
export declare class DetectedCsvFormatDescriptor extends SpeakeasyBase {
    charset?: DetectedField;
    containsHeader?: DetectedField;
    delimiter?: DetectedField;
    fileCompression?: DetectedField;
    headerList?: DetectedField;
    quoteSymbol?: DetectedField;
}
