import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeOrderListV3QueryParams extends SpeakeasyBase {
    testMode?: boolean;
    userName: string;
}
export declare class ChangeOrderListV3Request extends SpeakeasyBase {
    queryParams: ChangeOrderListV3QueryParams;
    request: shared.ChangeOrderListRequest;
}
export declare class ChangeOrderListV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
