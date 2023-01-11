import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChannelCatalogProductValueOverridePathParams extends SpeakeasyBase {
    channelCatalogId: string;
    channelColumnId: string;
    productId: string;
}
export declare class DeleteChannelCatalogProductValueOverrideRequest extends SpeakeasyBase {
    pathParams: DeleteChannelCatalogProductValueOverridePathParams;
}
export declare class DeleteChannelCatalogProductValueOverrideResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
