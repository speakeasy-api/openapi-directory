import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogProductByChannelCatalogRequest extends SpeakeasyBase {
    request: shared.ChannelCatalogProductByChannelCatalogRequest;
}
export declare class GetChannelCatalogProductByChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    channelCatalogProductByChannelCatalogResponse?: shared.ChannelCatalogProductByChannelCatalogResponse;
}
