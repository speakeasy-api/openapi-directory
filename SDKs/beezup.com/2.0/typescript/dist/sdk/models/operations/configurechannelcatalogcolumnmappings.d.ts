import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureChannelCatalogColumnMappingsPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class ConfigureChannelCatalogColumnMappingsRequest extends SpeakeasyBase {
    pathParams: ConfigureChannelCatalogColumnMappingsPathParams;
    request: shared.ChannelCatalogColumnMapping[];
}
export declare class ConfigureChannelCatalogColumnMappingsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
