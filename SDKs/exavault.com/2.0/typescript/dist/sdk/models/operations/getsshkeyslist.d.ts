import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSSHKeysListRequest extends SpeakeasyBase {
    /**
     * Access token required to make the API call.
     */
    evAccessToken: string;
    /**
     * API key required to make the API call.
     */
    evApiKey: string;
    /**
     *  Limits the results by the given number. Cannot be set higher than 100.
     */
    limit?: number;
    /**
     *  Determines which item to start on for pagination. Use zero (0) to start at the beginning of the list.
     */
    offset?: number;
    /**
     *  Only return results for the given user ID. This is not the username, but the numeric ID of the user.
     */
    userId?: string;
}
export declare class GetSSHKeysListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Operation
     */
    sshKeyCollectionResponse?: shared.SSHKeyCollectionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
