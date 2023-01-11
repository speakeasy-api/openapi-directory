import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CopyOptimisationPathParams extends SpeakeasyBase {
    storeId: string;
}
export declare class CopyOptimisationRequest extends SpeakeasyBase {
    pathParams: CopyOptimisationPathParams;
    request: shared.CopyOptimisationRequest;
}
export declare class CopyOptimisationResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    copyOptimisationResponse?: shared.CopyOptimisationResponse;
}
