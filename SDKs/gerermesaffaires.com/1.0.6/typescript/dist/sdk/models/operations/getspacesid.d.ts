import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
export declare enum GetSpacesId200ApplicationJSONTypeEnum {
    Private = "private",
    Enterprise = "enterprise",
    Company = "company",
    Association = "association"
}
/**
 * A space
 */
export declare class GetSpacesId200ApplicationJSON extends SpeakeasyBase {
    id?: string;
    modificationDate?: string;
    name?: string;
    type?: GetSpacesId200ApplicationJSONTypeEnum;
}
export declare class GetSpacesIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A space
     */
    getSpacesId200ApplicationJSONObject?: GetSpacesId200ApplicationJSON;
}
