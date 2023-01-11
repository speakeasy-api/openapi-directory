import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OptimiseAllPathParams extends SpeakeasyBase {
    actionName: shared.OptimisationActionNameGeneralParametersEnum;
    storeId: string;
}
export declare class OptimiseAllRequest extends SpeakeasyBase {
    pathParams: OptimiseAllPathParams;
    request: shared.OptimiseAllRequest;
}
export declare class OptimiseAllResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
}
