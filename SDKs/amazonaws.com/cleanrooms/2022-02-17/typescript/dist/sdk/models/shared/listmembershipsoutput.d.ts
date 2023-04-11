import { SpeakeasyBase } from "../../../internal/utils";
import { MembershipSummary } from "./membershipsummary";
/**
 * Success
 */
export declare class ListMembershipsOutput extends SpeakeasyBase {
    membershipSummaries: MembershipSummary[];
    nextToken?: string;
}
