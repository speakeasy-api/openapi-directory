import { SpeakeasyBase } from "../../../internal/utils";
import { DomainDetails } from "./domaindetails";
/**
 * Success
 */
export declare class ListDomainsResponse extends SpeakeasyBase {
    domains?: DomainDetails[];
    nextToken?: string;
}
