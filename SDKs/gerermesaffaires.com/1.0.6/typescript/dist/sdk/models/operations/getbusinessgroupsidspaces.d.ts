import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetBusinessGroupsIdSpacesSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
/**
 * Type of the space
 */
export declare enum GetBusinessGroupsIdSpacesTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
export declare class GetBusinessGroupsIdSpacesRequest extends SpeakeasyBase {
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
    type?: GetBusinessGroupsIdSpacesTypeEnum;
    /**
     * Id of the group
     */
    id: string;
}
export declare enum GetBusinessGroupsIdSpaces200ApplicationJSONTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
export declare class GetBusinessGroupsIdSpaces200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    modificationDate?: string;
    name?: string;
    registrationNumber?: string;
    type?: GetBusinessGroupsIdSpaces200ApplicationJSONTypeEnum;
}
export declare class GetBusinessGroupsIdSpacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of Spaces
     */
    getBusinessGroupsIdSpaces200ApplicationJSONObjects?: GetBusinessGroupsIdSpaces200ApplicationJSON[];
}
