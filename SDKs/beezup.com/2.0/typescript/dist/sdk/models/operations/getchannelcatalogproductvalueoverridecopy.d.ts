import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChannelCatalogProductValueOverrideCopyPathParams extends SpeakeasyBase {
    channelCatalogId: string;
    productId: string;
}
export declare class GetChannelCatalogProductValueOverrideCopyRequest extends SpeakeasyBase {
    pathParams: GetChannelCatalogProductValueOverrideCopyPathParams;
}
export declare class GetChannelCatalogProductValueOverrideCopyResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
