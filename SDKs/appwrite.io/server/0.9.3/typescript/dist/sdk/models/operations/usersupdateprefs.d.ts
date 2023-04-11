import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class UsersUpdatePrefsSecurity extends SpeakeasyBase {
    key: string;
    project: string;
}
export declare class UsersUpdatePrefsRequestBody extends SpeakeasyBase {
    /**
     * Prefs key-value JSON object.
     */
    prefs: Record<string, any>;
}
export declare class UsersUpdatePrefsRequest extends SpeakeasyBase {
    requestBody?: UsersUpdatePrefsRequestBody;
    /**
     * User unique ID.
     */
    userId: string;
}
export declare class UsersUpdatePrefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Preferences
     */
    preferences?: Record<string, any>;
}
