import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AbortMultipartRequestBody extends SpeakeasyBase {
    /**
     * The identifier of the multipart upload in the external
     *
     * @remarks
     * storage provider. This is the multipart upload_id in AWS S3.
     */
    externalUploadIdentifier: string;
}
/**
 * external upload initialized
 */
export declare class AbortMultipart200ApplicationJSON extends SpeakeasyBase {
    success: string;
}
export declare class AbortMultipartResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * external upload initialized
     */
    abortMultipart200ApplicationJSONObject?: AbortMultipart200ApplicationJSON;
}
