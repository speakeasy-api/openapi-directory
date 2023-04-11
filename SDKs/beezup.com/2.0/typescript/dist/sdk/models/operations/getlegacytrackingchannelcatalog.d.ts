import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetLegacyTrackingChannelCatalogRequest extends SpeakeasyBase {
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
}
export declare class GetLegacyTrackingChannelCatalogResponse extends SpeakeasyBase {
    /**
     * Channel catalog not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Channel catalog configured to use legacy tracking format
     */
    legacyTrackingChannelCatalog?: shared.LegacyTrackingChannelCatalog;
}
