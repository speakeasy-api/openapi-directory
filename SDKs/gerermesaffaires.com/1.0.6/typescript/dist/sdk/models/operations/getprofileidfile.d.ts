import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetProfileIdFileRequest extends SpeakeasyBase {
    /**
     * to get a contract (if not signed error 404 + html contract)
     */
    contract?: string;
}
export declare class GetProfileIdFile200MultipartFormDataBirth extends SpeakeasyBase {
    city?: string;
    country?: string;
    date?: string;
    zipCode?: string;
}
export declare enum GetProfileIdFile200MultipartFormDataSexEnum {
    Male = "male",
    Female = "female"
}
export declare enum GetProfileIdFile200MultipartFormDataStatusEnum {
    Validated = "validated",
    NotValidated = "not validated"
}
/**
 * the status of the member
 */
export declare class GetProfileIdFile200MultipartFormData extends SpeakeasyBase {
    birth?: GetProfileIdFile200MultipartFormDataBirth;
    birthName?: string;
    firstName?: string;
    idFile?: Uint8Array;
    name?: string;
    privateSpaceId?: string;
    sex?: GetProfileIdFile200MultipartFormDataSexEnum;
    status?: GetProfileIdFile200MultipartFormDataStatusEnum;
}
export declare class GetProfileIdFile200ApplicationJSONBirth extends SpeakeasyBase {
    city?: string;
    country?: string;
    date?: string;
    zipCode?: string;
}
export declare class GetProfileIDFile200ApplicationJSONIDFile extends SpeakeasyBase {
    content64Encoded?: string;
}
export declare enum GetProfileIdFile200ApplicationJSONSexEnum {
    Male = "male",
    Female = "female"
}
export declare enum GetProfileIdFile200ApplicationJSONStatusEnum {
    Validated = "validated",
    NotValidated = "not validated"
}
/**
 * the status of the member
 */
export declare class GetProfileIdFile200ApplicationJSON extends SpeakeasyBase {
    birth?: GetProfileIdFile200ApplicationJSONBirth;
    birthName?: string;
    firstName?: string;
    idFile?: GetProfileIDFile200ApplicationJSONIDFile;
    name?: string;
    privateSpaceId?: string;
    sex?: GetProfileIdFile200ApplicationJSONSexEnum;
    status?: GetProfileIdFile200ApplicationJSONStatusEnum;
}
export declare class GetProfileIdFileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * the status of the member
     */
    getProfileIdFile200ApplicationJSONObject?: GetProfileIdFile200ApplicationJSON;
}
