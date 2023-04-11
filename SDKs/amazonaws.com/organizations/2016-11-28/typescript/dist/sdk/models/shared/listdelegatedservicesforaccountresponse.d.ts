import { SpeakeasyBase } from "../../../internal/utils";
import { DelegatedService } from "./delegatedservice";
/**
 * Success
 */
export declare class ListDelegatedServicesForAccountResponse extends SpeakeasyBase {
    delegatedServices?: DelegatedService[];
    nextToken?: string;
}
