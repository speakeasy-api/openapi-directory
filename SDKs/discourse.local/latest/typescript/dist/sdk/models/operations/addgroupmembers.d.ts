import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class AddGroupMembersRequestBody extends SpeakeasyBase {
    /**
     * comma separated list
     */
    usernames?: string;
}
export declare class AddGroupMembersRequest extends SpeakeasyBase {
    requestBody?: AddGroupMembersRequestBody;
    id: number;
}
/**
 * success response
 */
export declare class AddGroupMembers200ApplicationJSON extends SpeakeasyBase {
    emails: any[];
    success: string;
    usernames: any[];
}
export declare class AddGroupMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    addGroupMembers200ApplicationJSONObject?: AddGroupMembers200ApplicationJSON;
}
