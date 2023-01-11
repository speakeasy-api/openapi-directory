import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptimiseByProductPathParams extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    productId: string;
    storeId: string;
}
export declare class OptimiseByProductRequest extends SpeakeasyBase {
    pathParams: OptimiseByProductPathParams;
    request?: string[];
}
export declare class OptimiseByProductResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
