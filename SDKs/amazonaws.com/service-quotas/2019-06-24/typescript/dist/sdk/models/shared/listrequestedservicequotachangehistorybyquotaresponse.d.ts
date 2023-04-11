import { SpeakeasyBase } from "../../../internal/utils";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";
/**
 * Success
 */
export declare class ListRequestedServiceQuotaChangeHistoryByQuotaResponse extends SpeakeasyBase {
    nextToken?: string;
    requestedQuotas?: RequestedServiceQuotaChange[];
}
