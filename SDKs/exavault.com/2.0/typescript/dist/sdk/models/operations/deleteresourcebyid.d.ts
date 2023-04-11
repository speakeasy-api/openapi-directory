import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteResourceByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID number of the resource
     */
    id: number;
}
export declare class DeleteResourceByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
