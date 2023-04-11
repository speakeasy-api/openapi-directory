import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OptimiseRequest extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    optimiseRequest: shared.OptimiseRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class OptimiseResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
