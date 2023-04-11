import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdPersonsPersonIdDetailsRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the person to get or memberId
     */
    personId: string;
}
export declare class GetSpacesIdPersonsPersonIdDetails200ApplicationJSONAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
export declare class GetSpacesIdPersonsPersonIdDetails200ApplicationJSON extends SpeakeasyBase {
    address?: GetSpacesIdPersonsPersonIdDetails200ApplicationJSONAddress;
    designation?: string;
    email?: string[];
    phone?: string[];
}
export declare class GetSpacesIdPersonsPersonIdDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of contact details of a person
     */
    getSpacesIdPersonsPersonIdDetails200ApplicationJSONAllOfs?: GetSpacesIdPersonsPersonIdDetails200ApplicationJSON[];
}
