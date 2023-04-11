import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupsPatchNotesRawRequest extends SpeakeasyBase {
    /**
     * Patch requests
     */
    requestBody: Uint8Array;
    /**
     * Id of the group
     */
    id: number;
}
export declare class GroupsPatchNotesRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
