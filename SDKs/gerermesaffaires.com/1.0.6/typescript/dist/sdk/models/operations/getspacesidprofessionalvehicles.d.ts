import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdProfessionalVehiclesRequest extends SpeakeasyBase {
    /**
     * designation of the vehicle
     */
    designation?: string;
    /**
     * Id of the space
     */
    id: string;
}
export declare enum GetSpacesIdProfessionalVehicles200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class GetSpacesIdProfessionalVehicles200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    brand?: string;
    class?: string;
    comment?: string;
    companyTax?: boolean;
    dateIn?: string;
    dateOut?: string;
    designation?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesIdProfessionalVehicles200ApplicationJSONLevelEnum;
    model?: string;
    modificationDate?: string;
    name?: string;
    parent?: string;
    registrationDate?: string;
    registrationNumber?: string;
    type?: string;
    value?: number;
}
export declare class GetSpacesIdProfessionalVehiclesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of professional Vehicles
     */
    getSpacesIdProfessionalVehicles200ApplicationJSONAnies?: GetSpacesIdProfessionalVehicles200ApplicationJSON[];
}
