import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UserGroupsReadSecurity extends SpeakeasyBase {
    drchronoOauth2: string;
}
export declare class UserGroupsReadRequest extends SpeakeasyBase {
    doctor?: number;
    id: string;
}
export declare class UserGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    userProfilesGroup?: shared.UserProfilesGroup;
}
