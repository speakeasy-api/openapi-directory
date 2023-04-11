import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DataPointsPatchNotesJsonRequest extends SpeakeasyBase {
    /**
     * Patch requests
     */
    apiCoreRequestsGenericTextPatch: shared.ApiCoreRequestsGenericTextPatch;
    /**
     * Id of the datapoint
     */
    id: number;
}
export declare class DataPointsPatchNotesJsonResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
