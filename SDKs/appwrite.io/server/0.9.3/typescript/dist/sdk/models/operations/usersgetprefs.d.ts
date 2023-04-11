import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersGetPrefsSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersGetPrefsRequest extends SpeakeasyBase {
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersGetPrefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Preferences
     */
    preferences?: Record<string, any>;
}
