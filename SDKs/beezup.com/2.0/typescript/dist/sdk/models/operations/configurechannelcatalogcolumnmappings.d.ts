import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConfigureChannelCatalogColumnMappingsRequest extends SpeakeasyBase {
    requestBody: shared.ChannelCatalogColumnMapping[];
    /**
     * The channel catalog identifier
     */
    channelCatalogId: string;
}
export declare class ConfigureChannelCatalogColumnMappingsResponse extends SpeakeasyBase {
    /**
     * ChannelCatalogId not found or not authorized
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
