import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveGroupMembersRequestBody extends SpeakeasyBase {
    /**
     * comma separated list
     */
    usernames?: string;
}
export declare class RemoveGroupMembersRequest extends SpeakeasyBase {
    requestBody?: RemoveGroupMembersRequestBody;
    id: number;
}
/**
 * success response
 */
export declare class RemoveGroupMembers200ApplicationJSON extends SpeakeasyBase {
    skippedUsernames: any[];
    success: string;
    usernames: any[];
}
export declare class RemoveGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    removeGroupMembers200ApplicationJSONObject?: RemoveGroupMembers200ApplicationJSON;
}
