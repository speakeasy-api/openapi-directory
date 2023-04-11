import { SpeakeasyBase } from "../../../internal/utils";
import { ExportJobResponse } from "./exportjobresponse";
/**
 * Success
 */
export declare class CreateExportJobResponse extends SpeakeasyBase {
    /**
     * Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.
     */
    exportJobResponse: ExportJobResponse;
}
