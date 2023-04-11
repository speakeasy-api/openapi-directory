import { SpeakeasyBase } from "../../../internal/utils";
import { DomainSummary } from "./domainsummary";
/**
 * Success
 */
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains: DomainSummary[];
    nextToken?: string;
}
