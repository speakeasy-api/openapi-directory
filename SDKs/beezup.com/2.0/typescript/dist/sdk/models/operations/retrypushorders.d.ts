import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetryPushOrdersPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RetryPushOrdersRequest extends SpeakeasyBase {
    pathParams: RetryPushOrdersPathParams;
}
export declare class RetryPushOrdersResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
