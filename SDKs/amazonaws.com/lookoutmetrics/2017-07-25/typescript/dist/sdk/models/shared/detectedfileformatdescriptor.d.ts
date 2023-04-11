import { SpeakeasyBase } from "../../../internal/utils";
import { DetectedCsvFormatDescriptor } from "./detectedcsvformatdescriptor";
import { DetectedJsonFormatDescriptor } from "./detectedjsonformatdescriptor";
/**
 * Properties of an inferred data format.
 */
export declare class DetectedFileFormatDescriptor extends SpeakeasyBase {
    csvFormatDescriptor?: DetectedCsvFormatDescriptor;
    jsonFormatDescriptor?: DetectedJsonFormatDescriptor;
}
