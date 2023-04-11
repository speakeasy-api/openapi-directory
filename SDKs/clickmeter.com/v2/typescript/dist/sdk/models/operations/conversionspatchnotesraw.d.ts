import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConversionsPatchNotesRawRequest extends SpeakeasyBase {
    /**
     * Patch requests
     */
    requestBody: Uint8Array;
    /**
     * Id of the conversion
     */
    conversionId: number;
}
export declare class ConversionsPatchNotesRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
