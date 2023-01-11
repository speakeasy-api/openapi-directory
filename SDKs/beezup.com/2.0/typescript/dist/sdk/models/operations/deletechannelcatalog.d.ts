import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteChannelCatalogPathParams extends SpeakeasyBase {
    channelCatalogId: string;
}
export declare class DeleteChannelCatalogRequest extends SpeakeasyBase {
    pathParams: DeleteChannelCatalogPathParams;
}
export declare class DeleteChannelCatalogResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
