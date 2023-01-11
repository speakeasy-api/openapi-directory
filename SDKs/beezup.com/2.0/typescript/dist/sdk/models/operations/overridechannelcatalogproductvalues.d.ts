import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OverrideChannelCatalogProductValuesPathParams extends SpeakeasyBase {
    channelCatalogId: string;
    productId: string;
}
export declare class OverrideChannelCatalogProductValuesRequest extends SpeakeasyBase {
    pathParams: OverrideChannelCatalogProductValuesPathParams;
    request: Record<string, string>;
}
export declare class OverrideChannelCatalogProductValuesResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
