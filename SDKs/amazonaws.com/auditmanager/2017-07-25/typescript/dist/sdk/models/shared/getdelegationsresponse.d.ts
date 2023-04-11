import { SpeakeasyBase } from "../../../internal/utils";
import { DelegationMetadata } from "./delegationmetadata";
/**
 * Success
 */
export declare class GetDelegationsResponse extends SpeakeasyBase {
    delegations?: DelegationMetadata[];
    nextToken?: string;
}
