import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUserByIdRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API Key
     */
    evApiKey: string;
    /**
     * The user's ID. Note that this is our internal ID, and _not the username_. You can obtain it by calling the [GET /users](#operation/listUsers) method.
     */
    id: number;
    /**
     * Comma-separated list of relationships to include in response. Possible values include **homeResource** and **ownerAccount**.
     */
    include?: string;
}
export declare class GetUserByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful Operation
     */
    userResponse?: shared.UserResponse;
}
