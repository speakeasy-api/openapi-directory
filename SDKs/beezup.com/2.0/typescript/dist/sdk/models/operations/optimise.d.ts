import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptimisePathParams extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    storeId: string;
}
export declare class OptimiseRequest extends SpeakeasyBase {
    pathParams: OptimisePathParams;
    request: shared.OptimiseRequest;
}
export declare class OptimiseResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
