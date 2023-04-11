import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Type of the space
 */
export declare enum GetSpacesAllTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
export declare class GetSpacesAllRequest extends SpeakeasyBase {
    /**
     * Name of the space
     */
    name?: string;
    /**
     * Type of the space
     */
    type?: GetSpacesAllTypeEnum;
}
export declare enum GetSpacesAll200ApplicationJSONTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
export declare class GetSpacesAll200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    modificationDate?: string;
    name?: string;
    registrationNumber?: string;
    type?: GetSpacesAll200ApplicationJSONTypeEnum;
}
export declare class GetSpacesAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of Spaces
     */
    getSpacesAll200ApplicationJSONObjects?: GetSpacesAll200ApplicationJSON[];
}
