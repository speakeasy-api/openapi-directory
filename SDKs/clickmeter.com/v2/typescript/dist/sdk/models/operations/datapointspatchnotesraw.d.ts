import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataPointsPatchNotesRawRequest extends SpeakeasyBase {
    /**
     * Patch requests
     */
    requestBody: Uint8Array;
    /**
     * Id of the datapoint
     */
    id: number;
}
export declare class DataPointsPatchNotesRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
