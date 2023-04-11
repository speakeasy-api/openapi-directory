import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAuthorizableKeystoreRequest extends SpeakeasyBase {
    authorizableId: string;
    intermediatePath: string;
}
export declare class GetAuthorizableKeystoreResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Retrieved Authorizable Keystore info
     */
    keystoreInfo?: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Default response
     */
    getAuthorizableKeystoreDefaultTextPlainString?: string;
}
