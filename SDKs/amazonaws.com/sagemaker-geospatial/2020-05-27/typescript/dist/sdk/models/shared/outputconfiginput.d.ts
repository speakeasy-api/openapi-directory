import { SpeakeasyBase } from "../../../internal/utils";
import { ExportS3DataInput } from "./exports3datainput";
/**
 * The response structure for an OutputConfig returned by an ExportEarthObservationJob.
 */
export declare class OutputConfigInput extends SpeakeasyBase {
    s3Data: ExportS3DataInput;
}
