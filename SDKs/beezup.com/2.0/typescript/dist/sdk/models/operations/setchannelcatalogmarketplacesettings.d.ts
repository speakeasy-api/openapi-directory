import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetChannelCatalogMarketplaceSettingsRequest extends SpeakeasyBase {
    /**
     * Channel Catalog Id to query
     */
    channelCatalogId: string;
    /**
     * Settings to save
     */
    setChannelCatalogMarketplaceSettingsRequest: shared.SetChannelCatalogMarketplaceSettingsRequest;
}
export declare class SetChannelCatalogMarketplaceSettingsResponse extends SpeakeasyBase {
    /**
     * One or more channel catalog marketplace property keys or values are invalid for requested marketplace channel catalog. See response for details.
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
