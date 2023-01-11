import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReenableChannelCatalogProductPathParams extends SpeakeasyBase {
    channelCatalogId: string;
    productId: string;
}
export declare class ReenableChannelCatalogProductRequest extends SpeakeasyBase {
    pathParams: ReenableChannelCatalogProductPathParams;
}
export declare class ReenableChannelCatalogProductResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
