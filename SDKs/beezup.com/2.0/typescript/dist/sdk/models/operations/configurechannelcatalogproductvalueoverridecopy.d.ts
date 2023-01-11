import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfigureChannelCatalogProductValueOverrideCopyPathParams extends SpeakeasyBase {
    channelCatalogId: string;
    productId: string;
}
export declare class ConfigureChannelCatalogProductValueOverrideCopyRequest extends SpeakeasyBase {
    pathParams: ConfigureChannelCatalogProductValueOverrideCopyPathParams;
}
export declare class ConfigureChannelCatalogProductValueOverrideCopyResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
