import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConversionsPatchRawRequest extends SpeakeasyBase {
    /**
     * Patch request
     */
    requestBody: Uint8Array;
    /**
     * Id of the conversion
     */
    conversionId: number;
}
export declare class ConversionsPatchRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
