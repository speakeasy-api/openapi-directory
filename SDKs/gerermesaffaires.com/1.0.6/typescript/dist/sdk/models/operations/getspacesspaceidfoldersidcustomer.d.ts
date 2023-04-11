import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdCustomerRequest extends SpeakeasyBase {
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdCustomer200ApplicationJSONActors extends SpeakeasyBase {
    active?: string;
    isAdmin?: string;
    memberId?: string;
    name?: string;
    role?: string;
}
export declare enum GetSpacesSpaceIdFoldersIdCustomer200ApplicationJSONLevelEnum {
    Confidential = "confidential",
    Regular = "regular",
    Public = "public"
}
/**
 * A customer folder
 */
export declare class GetSpacesSpaceIdFoldersIdCustomer200ApplicationJSON extends SpeakeasyBase {
    about?: string;
    actors?: GetSpacesSpaceIdFoldersIdCustomer200ApplicationJSONActors[];
    archivalDate?: string;
    class?: string;
    clientSpaceId?: string;
    comment?: string;
    customerNumber?: string;
    designation?: string;
    end?: string;
    home?: boolean;
    id?: string;
    keywords?: string[];
    level?: GetSpacesSpaceIdFoldersIdCustomer200ApplicationJSONLevelEnum;
    modificationDate?: string;
    name?: string;
    parent?: string;
    portfolioId?: string;
    secondaryPortfolioIds?: string[];
    start?: string;
}
export declare class GetSpacesSpaceIdFoldersIdCustomerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A customer folder
     */
    getSpacesSpaceIdFoldersIdCustomer200ApplicationJSONObject?: GetSpacesSpaceIdFoldersIdCustomer200ApplicationJSON;
}
