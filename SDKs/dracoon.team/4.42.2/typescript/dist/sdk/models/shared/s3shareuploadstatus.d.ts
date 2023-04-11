import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponse } from "./errorresponse";
/**
 * S3 file upload status information
 */
export declare class S3ShareUploadStatus extends SpeakeasyBase {
    /**
     * Error information
     */
    errorDetails?: ErrorResponse;
    /**
     * File name
     */
    fileName: string;
    /**
     * File size in byte
     */
    size?: number;
    /**
     * S3 file upload status:
     *
     * @remarks
     *
     * * `transfer` - upload in progress
     *
     * * `finishing` - completing file upload
     *
     * * `done` - file upload successully done
     *
     * * `error` - an error occurred while file upload
     */
    status: string;
}
