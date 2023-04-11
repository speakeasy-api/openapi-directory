import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagsPatchGroupRawRequest extends SpeakeasyBase {
    /**
     * The body patch
     */
    requestBody: Uint8Array;
    /**
     * Id of the tag
     */
    tagId: number;
}
export declare class TagsPatchGroupRawResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
