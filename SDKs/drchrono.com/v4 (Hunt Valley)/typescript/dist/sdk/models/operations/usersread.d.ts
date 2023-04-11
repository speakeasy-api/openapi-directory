import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UsersReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class UsersReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class UsersReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    userProfile?: shared.UserProfile;
}
