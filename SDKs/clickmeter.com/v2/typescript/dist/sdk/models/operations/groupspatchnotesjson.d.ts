import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsPatchNotesJsonRequest extends SpeakeasyBase {
    /**
     * Patch requests
     */
    apiCoreRequestsGenericTextPatch: shared.ApiCoreRequestsGenericTextPatch;
    /**
     * Id of the group
     */
    id: number;
}
export declare class GroupsPatchNotesJsonResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
