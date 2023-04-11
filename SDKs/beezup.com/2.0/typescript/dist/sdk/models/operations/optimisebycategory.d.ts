import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OptimiseByCategoryRequest extends SpeakeasyBase {
    /**
     * The channel identifier list concerned by this optimisation
     */
    requestBody?: string[];
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    /**
     * The category identifier concerned by this optimisation
     */
    catalogCategoryId: string;
    /**
     * Your store identifier
     */
    storeId: string;
}
export declare class OptimiseByCategoryResponse extends SpeakeasyBase {
    /**
     * Invalid request
     */
    beezUPCommonErrorResponseMessage?: shared.BeezUPCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
