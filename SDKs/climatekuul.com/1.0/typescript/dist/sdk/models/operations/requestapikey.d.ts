import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const RequestApiKeyServerList: readonly ["http://api.climatekuul.com:8000/footprint"];
export declare class RequestApiKeyRequestBody extends SpeakeasyBase {
    /**
     * Api Key for client
     */
    apiKeyL1: string;
    /**
     * Integration Partner Api Key
     */
    apiKeyL2: string;
    /**
     * User email
     */
    email: string;
    /**
     * User password
     */
    password: number;
    /**
     * User first name
     */
    userFirstName: string;
    /**
     * User last name
     */
    userLastName: string;
}
export declare class RequestApiKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
