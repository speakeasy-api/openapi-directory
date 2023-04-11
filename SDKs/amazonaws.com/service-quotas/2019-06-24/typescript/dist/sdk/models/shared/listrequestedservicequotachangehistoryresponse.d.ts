import { SpeakeasyBase } from "../../../internal/utils";
import { RequestedServiceQuotaChange } from "./requestedservicequotachange";
/**
 * Success
 */
export declare class ListRequestedServiceQuotaChangeHistoryResponse extends SpeakeasyBase {
    nextToken?: string;
    requestedQuotas?: RequestedServiceQuotaChange[];
}
