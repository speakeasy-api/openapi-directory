import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HarvestOrderV3PathParams extends SpeakeasyBase {
    accountId: number;
    beezUPOrderId: string;
    marketplaceTechnicalCode: string;
}
export declare class HarvestOrderV3Request extends SpeakeasyBase {
    pathParams: HarvestOrderV3PathParams;
}
export declare class HarvestOrderV3Response extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    errorResponseMessage?: shared.ErrorResponseMessage;
}
