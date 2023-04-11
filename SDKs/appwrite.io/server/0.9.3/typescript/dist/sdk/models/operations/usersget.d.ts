import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersGetSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersGetRequest extends SpeakeasyBase {
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
