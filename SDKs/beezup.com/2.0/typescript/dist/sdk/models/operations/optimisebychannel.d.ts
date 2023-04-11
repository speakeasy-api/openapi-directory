import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OptimiseByChannelRequest extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    /**
     * The channel identifier concerned by this optimisation
     */
    channelId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class OptimiseByChannelResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
