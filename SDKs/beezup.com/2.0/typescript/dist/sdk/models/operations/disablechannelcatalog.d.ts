import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisableChannelCatalogPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class DisableChannelCatalogRequest extends SpeakeasyBase {
    pathParams: DisableChannelCatalogPathParams;
}
export declare class DisableChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
