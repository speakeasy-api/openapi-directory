import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteShareByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * ID of the share entry
     */
    id: number;
}
export declare class DeleteShareByIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
