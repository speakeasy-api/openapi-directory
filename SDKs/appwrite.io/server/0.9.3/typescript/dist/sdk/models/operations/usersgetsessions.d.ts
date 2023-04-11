import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetSessionsSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersGetSessionsRequest extends SpeakeasyBase {
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersGetSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Sessions List
     */
    sessionList?: shared.SessionList;
}
