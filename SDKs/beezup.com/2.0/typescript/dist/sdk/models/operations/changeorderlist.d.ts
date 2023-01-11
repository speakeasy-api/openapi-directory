import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeOrderListPathParams extends SpeakeasyBase {
    changeOrderType: string;
}
export declare class ChangeOrderListQueryParams extends SpeakeasyBase {
    testMode?: boolean;
    userName: string;
}
export declare class ChangeOrderListRequest extends SpeakeasyBase {
    pathParams: ChangeOrderListPathParams;
    queryParams: ChangeOrderListQueryParams;
    request: shared.ChangeOrderListRequest;
}
export declare class ChangeOrderListResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
}
