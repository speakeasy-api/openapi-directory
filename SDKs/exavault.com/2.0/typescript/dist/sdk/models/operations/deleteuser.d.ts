import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteUserRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key required to make the API call.
     */
    evApiKey: string;
    /**
     * The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.
     */
    id: number;
}
export declare class DeleteUserResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    emptyResponse?: shared.EmptyResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
