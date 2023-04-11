import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AccountUpdatePrefsSecurity extends SpeakeasyBase {
    jwt: string;
    project: string;
}
export declare class AccountUpdatePrefsRequestBody extends SpeakeasyBase {
    /**
     * Prefs key-value JSON object.
     */
    prefs: Record<string, any>;
}
export declare class AccountUpdatePrefsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * User
     */
    user?: shared.User;
}
