import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetChannelCatalogMarketplacePropertiesRequest extends SpeakeasyBase {
    /**
     * Indicates that the client accepts the following languages.
     */
    acceptLanguage?: string[];
    channelCatalogId: string;
    redirectionPageUrl: string;
}
export declare class GetChannelCatalogMarketplacePropertiesResponse extends SpeakeasyBase {
    /**
     * Occurs when something goes wrong
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successfully fetched channel catalog properties
     */
    channelCatalogMarketplaceProperties?: shared.ChannelCatalogMarketplaceProperties;
}
