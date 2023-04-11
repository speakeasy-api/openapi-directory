import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostRegistrationSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * code and secret to accept the invitation
 */
export declare class PostRegistrationRequestBody extends SpeakeasyBase {
    code?: string;
    secret?: string;
}
export declare class PostRegistration201ApplicationJSONPrivate extends SpeakeasyBase {
    folderId?: string;
    spaceId?: string;
}
/**
 * Id of the private space and the contract folder
 */
export declare class PostRegistration201ApplicationJSON extends SpeakeasyBase {
    private?: PostRegistration201ApplicationJSONPrivate;
}
export declare class PostRegistrationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of the private space and the contract folder
     */
    postRegistration201ApplicationJSONObject?: PostRegistration201ApplicationJSON;
}
