import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TagsPatchDataPointJsonRequest extends SpeakeasyBase {
    /**
     * The body patch
     */
    apiCoreRequestsPatchBody: shared.ApiCoreRequestsPatchBody;
    /**
     * Id of the tag
     */
    tagId: number;
}
export declare class TagsPatchDataPointJsonResponse extends SpeakeasyBase {
    apiCoreResponsesEntityUriSystemInt64?: shared.ApiCoreResponsesEntityUriSystemInt64;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
