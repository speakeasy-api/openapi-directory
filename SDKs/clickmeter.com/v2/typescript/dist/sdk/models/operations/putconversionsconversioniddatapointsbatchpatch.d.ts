import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutConversionsConversionIdDatapointsBatchPatchRequest extends SpeakeasyBase {
    /**
     * Patch requests
     */
    apiCoreRequestsPatchBodyBatch: shared.ApiCoreRequestsPatchBodyBatch;
    /**
     * Id of the conversion
     */
    conversionId: number;
}
export declare class PutConversionsConversionIdDatapointsBatchPatchResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
