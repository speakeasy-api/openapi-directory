import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderChangeReportingV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
    orderChangeExecutionUUID: string;
}
export declare class GetOrderChangeReportingV3Request extends SpeakeasyBase {
    pathParams: GetOrderChangeReportingV3PathParams;
}
export declare class GetOrderChangeReportingV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    changeOrderReporting?: shared.ChangeOrderReporting;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
