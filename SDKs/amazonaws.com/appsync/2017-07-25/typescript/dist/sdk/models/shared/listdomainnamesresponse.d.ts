import { SpeakeasyBase } from "../../../internal/utils";
import { DomainNameConfig } from "./domainnameconfig";
/**
 * Success
 */
export declare class ListDomainNamesResponse extends SpeakeasyBase {
    domainNameConfigs?: DomainNameConfig[];
    nextToken?: string;
}
