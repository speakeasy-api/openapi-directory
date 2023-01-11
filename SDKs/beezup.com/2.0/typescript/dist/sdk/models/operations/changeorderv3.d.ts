import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeOrderV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    changeOrderType: string;
    marketplaceTechnicalCode: string;
}
export declare class ChangeOrderV3QueryParams extends SpeakeasyBase {
    testMode?: boolean;
    userName: string;
}
export declare class ChangeOrderV3Request extends SpeakeasyBase {
    pathParams: ChangeOrderV3PathParams;
    queryParams: ChangeOrderV3QueryParams;
    request?: Record<string, string>;
}
export declare class ChangeOrderV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
