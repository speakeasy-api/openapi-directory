import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableChannelCatalogProductPathParams extends SpeakeasyBase {
    channelCatalogId: string;
    productId: string;
}
export declare class DisableChannelCatalogProductRequest extends SpeakeasyBase {
    pathParams: DisableChannelCatalogProductPathParams;
}
export declare class DisableChannelCatalogProductResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
