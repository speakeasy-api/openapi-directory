import { SpeakeasyBase } from "../../../internal/utils";
import { BillingGroupListElement } from "./billinggrouplistelement";
/**
 * Success
 */
export declare class ListBillingGroupsOutput extends SpeakeasyBase {
    billingGroups?: BillingGroupListElement[];
    nextToken?: string;
}
