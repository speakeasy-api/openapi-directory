import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeOrderListV2PathParams extends SpeakeasyBase {
    changeOrderType: string;
}
export declare class ChangeOrderListV2QueryParams extends SpeakeasyBase {
    testMode?: boolean;
    userName: string;
}
export declare class ChangeOrderListV2Request extends SpeakeasyBase {
    pathParams: ChangeOrderListV2PathParams;
    queryParams: ChangeOrderListV2QueryParams;
    request: shared.ChangeOrderListRequestV2;
}
export declare class ChangeOrderListV2Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    statusCode: number;
    batchOrderOperationResponse?: shared.BatchOrderOperationResponse;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
