import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersRequest extends SpeakeasyBase {
    expand?: string;
    /**
     * searches a user by mail (if it contains no '@', '@biapi.pro' will be added at the end)
     */
    search?: string;
}
/**
 * users
 */
export declare class GetUsers200ApplicationJSON extends SpeakeasyBase {
    /**
     * total number of results
     */
    total?: number;
    users: shared.User[];
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * users
     */
    getUsers200ApplicationJSONObject?: GetUsers200ApplicationJSON;
}
