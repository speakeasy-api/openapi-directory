import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProfileSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    /**
     * to get a contract (if not signed error 404 + html contract)
     */
    contract?: string;
}
export declare class GetProfile200ApplicationJSONBirth extends SpeakeasyBase {
    city?: string;
    country?: string;
    date?: string;
    zipCode?: string;
}
export declare enum GetProfile200ApplicationJSONSexEnum {
    Male = "male",
    Female = "female"
}
export declare enum GetProfile200ApplicationJSONStatusEnum {
    Validated = "validated",
    NotValidated = "not validated"
}
/**
 * the status of the member
 */
export declare class GetProfile200ApplicationJSON extends SpeakeasyBase {
    birth?: GetProfile200ApplicationJSONBirth;
    birthName?: string;
    firstName?: string;
    name?: string;
    privateSpaceId?: string;
    sex?: GetProfile200ApplicationJSONSexEnum;
    status?: GetProfile200ApplicationJSONStatusEnum;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * the status of the member
     */
    getProfile200ApplicationJSONObject?: GetProfile200ApplicationJSON;
}
