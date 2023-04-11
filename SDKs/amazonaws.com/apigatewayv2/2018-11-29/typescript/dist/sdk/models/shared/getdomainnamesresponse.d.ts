import { SpeakeasyBase } from "../../../internal/utils";
import { DomainName } from "./domainname";
/**
 * Success
 */
export declare class GetDomainNamesResponse extends SpeakeasyBase {
    items?: DomainName[];
    nextToken?: string;
}
