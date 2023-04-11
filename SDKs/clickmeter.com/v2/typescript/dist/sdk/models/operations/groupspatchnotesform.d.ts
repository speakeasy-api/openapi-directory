import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsPatchNotesFormRequest extends SpeakeasyBase {
    /**
     * Patch requests
     */
    apiCoreRequestsGenericTextPatch: shared.ApiCoreRequestsGenericTextPatch;
    /**
     * Id of the group
     */
    id: number;
}
export declare class GroupsPatchNotesFormResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
