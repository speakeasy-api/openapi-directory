import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersListRequest extends SpeakeasyBase {
    /**
     * The number of results per page (max 100).
     */
    perPage?: number;
    /**
     * A user ID. Only return users with an ID greater than this ID.
     */
    since?: number;
}
export declare class UsersListResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Response
     */
    simpleUsers?: shared.SimpleUser[];
}
