import { SpeakeasyBase } from "../../../internal/utils";
import { ImportJobResponse } from "./importjobresponse";
/**
 * Success
 */
export declare class CreateImportJobResponse extends SpeakeasyBase {
    /**
     * Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.
     */
    importJobResponse: ImportJobResponse;
}
