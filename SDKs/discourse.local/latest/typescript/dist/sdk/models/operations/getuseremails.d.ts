import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetUserEmailsRequest extends SpeakeasyBase {
    username: string;
}
/**
 * success response
 */
export declare class GetUserEmails200ApplicationJSON extends SpeakeasyBase {
    associatedAccounts: any[];
    email: string;
    secondaryEmails: any[];
    unconfirmedEmails: any[];
}
export declare class GetUserEmailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    getUserEmails200ApplicationJSONObject?: GetUserEmails200ApplicationJSON;
}
