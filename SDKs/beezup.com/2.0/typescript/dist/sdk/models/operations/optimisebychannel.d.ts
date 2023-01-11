import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptimiseByChannelPathParams extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    channelId: string;
    storeId: string;
}
export declare class OptimiseByChannelRequest extends SpeakeasyBase {
    pathParams: OptimiseByChannelPathParams;
}
export declare class OptimiseByChannelResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
