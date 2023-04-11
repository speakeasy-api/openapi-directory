import { SpeakeasyBase } from "../../../internal/utils";
import { MemberSummary } from "./membersummary";
/**
 * Success
 */
export declare class ListMembersOutput extends SpeakeasyBase {
    memberSummaries: MemberSummary[];
    nextToken?: string;
}
