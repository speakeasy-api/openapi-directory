import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagsPatchTagNameJsonRequest extends SpeakeasyBase {
    /**
     * The body patch
     */
    apiCoreRequestsGenericTextPatch: shared.ApiCoreRequestsGenericTextPatch;
    /**
     * Id of the tag
     */
    tagId: number;
}
export declare class TagsPatchTagNameJsonResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
