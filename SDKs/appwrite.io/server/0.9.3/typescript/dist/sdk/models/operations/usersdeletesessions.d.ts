import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersDeleteSessionsSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersDeleteSessionsRequest extends SpeakeasyBase {
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersDeleteSessionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
