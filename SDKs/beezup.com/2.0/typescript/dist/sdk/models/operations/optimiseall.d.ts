import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OptimiseAllRequest extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    optimiseAllRequest: shared.OptimiseAllRequest;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class OptimiseAllResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
