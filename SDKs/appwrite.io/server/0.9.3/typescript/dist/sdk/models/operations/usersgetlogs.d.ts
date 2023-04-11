import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetLogsSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersGetLogsRequest extends SpeakeasyBase {
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersGetLogsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Logs List
     */
    logList?: shared.LogList;
}
