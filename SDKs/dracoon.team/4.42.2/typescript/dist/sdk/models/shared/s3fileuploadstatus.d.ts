import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorResponse } from "./errorresponse";
import { Node } from "./node";
/**
 * S3 file upload status information
 */
export declare class S3FileUploadStatus extends SpeakeasyBase {
    /**
     * Error information
     */
    errorDetails?: ErrorResponse;
    /**
     * Node information (Node can be a room, folder or file)
     */
    node?: Node;
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
