import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConversionsPostRawRequest extends SpeakeasyBase {
    /**
     * Updated body of the conversion
     */
    requestBody: Uint8Array;
    /**
     * Id of the conversion
     */
    conversionId: number;
}
export declare class ConversionsPostRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
