import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OptimiseByProductRequest extends SpeakeasyBase {
    /**
     * The channel identifier list concerned by this optimisation
     */
    requestBody?: string[];
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    /**
     * The product identifier concerned by this optimisation
     */
    productId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class OptimiseByProductResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
