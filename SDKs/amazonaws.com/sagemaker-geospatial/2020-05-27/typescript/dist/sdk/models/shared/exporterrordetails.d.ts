import { SpeakeasyBase } from "../../../internal/utils";
import { ExportErrorDetailsOutput } from "./exporterrordetailsoutput";
/**
 * The structure for returning the export error details in a GetEarthObservationJob.
 */
export declare class ExportErrorDetails extends SpeakeasyBase {
    exportResults?: ExportErrorDetailsOutput;
    exportSourceImages?: ExportErrorDetailsOutput;
}
