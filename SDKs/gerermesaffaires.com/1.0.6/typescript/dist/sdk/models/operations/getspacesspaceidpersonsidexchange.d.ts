import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdPersonsIdExchangeRequest extends SpeakeasyBase {
    /**
     * Id of the person or memberId
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare enum GetSpacesSpaceIdPersonsIdExchange200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * A folder
 */
export declare class GetSpacesSpaceIdPersonsIdExchange200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesSpaceIdPersonsIdExchange200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
}
export declare class GetSpacesSpaceIdPersonsIdExchangeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A folder
     */
    getSpacesSpaceIdPersonsIdExchange200ApplicationJSONObject?: GetSpacesSpaceIdPersonsIdExchange200ApplicationJSON;
}
