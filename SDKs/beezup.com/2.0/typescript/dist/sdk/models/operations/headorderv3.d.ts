import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HeadOrderV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class HeadOrderV3Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class HeadOrderV3Request extends SpeakeasyBase {
    pathParams: HeadOrderV3PathParams;
    headers: HeadOrderV3Headers;
}
export declare class HeadOrderV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
