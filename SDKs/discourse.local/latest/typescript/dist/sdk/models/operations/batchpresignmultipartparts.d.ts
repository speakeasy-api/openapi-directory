import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class BatchPresignMultipartPartsRequestBody extends SpeakeasyBase {
    /**
     * The part numbers to generate the presigned URLs for,
     *
     * @remarks
     * must be between 1 and 10000.
     */
    partNumbers: any[];
    /**
     * The unique identifier returned in the original /create-multipart
     *
     * @remarks
     * request.
     */
    uniqueIdentifier: string;
}
/**
 * external upload initialized
 */
export declare class BatchPresignMultipartParts200ApplicationJSON extends SpeakeasyBase {
    /**
     * The presigned URLs for each part number, which has
     *
     * @remarks
     * the part numbers as keys.
     */
    presignedUrls: Record<string, any>;
}
export declare class BatchPresignMultipartPartsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * external upload initialized
     */
    batchPresignMultipartParts200ApplicationJSONObject?: BatchPresignMultipartParts200ApplicationJSON;
}
