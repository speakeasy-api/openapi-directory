import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdCompanyEntitiesPersonIdDetailsRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
    /**
     * Id of the company entity to get
     */
    personId: string;
}
export declare class GetSpacesIdCompanyEntitiesPersonIdDetails200ApplicationJSONAddress extends SpeakeasyBase {
    city?: string;
    complement?: string;
    country?: string;
    street?: string;
    zipCode?: string;
}
export declare class GetSpacesIdCompanyEntitiesPersonIdDetails200ApplicationJSON extends SpeakeasyBase {
    address?: GetSpacesIdCompanyEntitiesPersonIdDetails200ApplicationJSONAddress;
    designation?: string;
    email?: string[];
    phone?: string[];
}
export declare class GetSpacesIdCompanyEntitiesPersonIdDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of contact details of a person
     */
    getSpacesIdCompanyEntitiesPersonIdDetails200ApplicationJSONAllOfs?: GetSpacesIdCompanyEntitiesPersonIdDetails200ApplicationJSON[];
}
