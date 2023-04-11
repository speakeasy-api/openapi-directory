import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceQuota } from "./servicequota";
/**
 * Success
 */
export declare class ListAWSDefaultServiceQuotasResponse extends SpeakeasyBase {
    nextToken?: string;
    quotas?: ServiceQuota[];
}
