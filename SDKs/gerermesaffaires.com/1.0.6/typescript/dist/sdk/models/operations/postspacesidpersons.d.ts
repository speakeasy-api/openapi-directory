import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesIdPersonsSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare class PostSpacesIdPersonsRequestBodyAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
export declare class PostSpacesIdPersonsRequestBodyBirth extends SpeakeasyBase {
    date?: number;
    place?: string;
}
export declare enum PostSpacesIdPersonsRequestBodySexEnum {
    Male = "male",
    Female = "female"
}
/**
 * Person to add
 */
export declare class PostSpacesIdPersonsRequestBody extends SpeakeasyBase {
    address?: PostSpacesIdPersonsRequestBodyAddress;
    archivalDate?: string;
    birth?: PostSpacesIdPersonsRequestBodyBirth;
    comment?: string;
    email?: string;
    firstName: string;
    mobile?: string;
    name: string;
    sex: PostSpacesIdPersonsRequestBodySexEnum;
}
export declare class PostSpacesIdPersonsRequest extends SpeakeasyBase {
    /**
     * Person to add
     */
    requestBody: PostSpacesIdPersonsRequestBody;
    /**
     * Id of the space
     */
    id: string;
}
/**
 * Id of person created
 */
export declare class PostSpacesIdPersons201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesIdPersonsResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of person created
     */
    postSpacesIdPersons201ApplicationJSONObject?: PostSpacesIdPersons201ApplicationJSON;
}
