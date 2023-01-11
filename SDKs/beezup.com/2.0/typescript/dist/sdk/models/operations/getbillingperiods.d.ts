import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetBillingPeriodsHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetBillingPeriodsRequest extends SpeakeasyBase {
    headers: GetBillingPeriodsHeaders;
}
export declare class GetBillingPeriodsResponse extends SpeakeasyBase {
    beezUPCommonErrorResponseMessage?: shared.BeezUpCommonErrorResponseMessage;
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    billingPeriodList?: shared.BillingPeriodList;
}
