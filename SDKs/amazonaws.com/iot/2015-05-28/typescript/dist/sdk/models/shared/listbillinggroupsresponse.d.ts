import { SpeakeasyBase } from "../../../internal/utils";
import { GroupNameAndArn } from "./groupnameandarn";
/**
 * Success
 */
export declare class ListBillingGroupsResponse extends SpeakeasyBase {
    billingGroups?: GroupNameAndArn[];
    nextToken?: string;
}
