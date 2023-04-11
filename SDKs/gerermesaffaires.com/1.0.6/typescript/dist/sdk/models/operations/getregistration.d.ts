import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetRegistrationSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetRegistrationRequest extends SpeakeasyBase {
    /**
     * Code of the invitation
     */
    code: string;
}
export declare class GetRegistration200ApplicationJson2 extends SpeakeasyBase {
    url?: string;
}
export declare class GetRegistration200ApplicationJson1 extends SpeakeasyBase {
    message?: string;
}
export declare class GetRegistrationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * the method to get the validation code or the registration link
     */
    getRegistration200ApplicationJSONOneOf?: any;
}
