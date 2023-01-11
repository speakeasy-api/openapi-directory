import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptimiseByCategoryPathParams extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    catalogCategoryId: string;
    storeId: string;
}
export declare class OptimiseByCategoryRequest extends SpeakeasyBase {
    pathParams: OptimiseByCategoryPathParams;
    request?: string[];
}
export declare class OptimiseByCategoryResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
