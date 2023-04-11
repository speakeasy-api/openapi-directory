import { SpeakeasyBase } from "../../../internal/utils";
import { MemberDetail } from "./memberdetail";
/**
 * Success
 */
export declare class ListMembersResponse extends SpeakeasyBase {
    memberDetails?: MemberDetail[];
    nextToken?: string;
}
