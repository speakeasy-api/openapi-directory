import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdPersonsPersonIdRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to get or memberId
     */
    personId: string;
}
export declare class GetSpacesIdPersonsPersonId200ApplicationJSONAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
export declare class GetSpacesIdPersonsPersonId200ApplicationJSONBirth extends SpeakeasyBase {
    date?: number;
    place?: string;
}
export declare enum GetSpacesIdPersonsPersonId200ApplicationJSONSexEnum {
    Male = "male",
    Female = "female"
}
export declare enum GetSpacesIdPersonsPersonId200ApplicationJSONValidatedEnum {
    True = "true",
    False = "false"
}
/**
 * A person
 */
export declare class GetSpacesIdPersonsPersonId200ApplicationJSON extends SpeakeasyBase {
    address?: GetSpacesIdPersonsPersonId200ApplicationJSONAddress;
    archivalDate?: string;
    birth?: GetSpacesIdPersonsPersonId200ApplicationJSONBirth;
    comment?: string;
    email?: string;
    firstName?: string;
    function?: string[];
    id?: string;
    memberId?: string;
    mobile?: string;
    modificationDate?: string;
    name?: string;
    sex?: GetSpacesIdPersonsPersonId200ApplicationJSONSexEnum;
    validated?: GetSpacesIdPersonsPersonId200ApplicationJSONValidatedEnum;
}
export declare class GetSpacesIdPersonsPersonIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A person
     */
    getSpacesIdPersonsPersonId200ApplicationJSONObject?: GetSpacesIdPersonsPersonId200ApplicationJSON;
}
