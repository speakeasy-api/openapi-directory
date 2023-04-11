import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesIdTaxContractsRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    id: string;
}
export declare enum GetSpacesIdTaxContracts200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
export declare class GetSpacesIdTaxContracts200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    archivalDate?: string;
    class?: string;
    comment?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesIdTaxContracts200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    start?: string;
}
export declare class GetSpacesIdTaxContractsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of tax contracts
     */
    getSpacesIdTaxContracts200ApplicationJSONAnies?: GetSpacesIdTaxContracts200ApplicationJSON[];
}
