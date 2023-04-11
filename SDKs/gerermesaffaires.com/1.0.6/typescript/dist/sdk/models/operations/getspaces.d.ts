import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the space
 */
export declare enum GetSpacesTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
export declare class GetSpacesRequest extends SpeakeasyBase {
    /**
     * Name of the space
     */
    name?: string;
    /**
     * registration number of the space
     */
    registrationNumber?: string;
    /**
     * Type of the space
     */
    type?: GetSpacesTypeEnum;
}
export declare enum GetSpaces200ApplicationJSONTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
export declare class GetSpaces200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    modificationDate?: string;
    name?: string;
    registrationNumber?: string;
    type?: GetSpaces200ApplicationJSONTypeEnum;
}
export declare class GetSpacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of Spaces
     */
    getSpaces200ApplicationJSONObjects?: GetSpaces200ApplicationJSON[];
}
