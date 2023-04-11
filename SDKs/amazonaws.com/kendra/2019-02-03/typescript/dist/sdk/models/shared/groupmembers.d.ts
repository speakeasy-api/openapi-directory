import { SpeakeasyBase } from "../../../internal/utils";
import { MemberGroup } from "./membergroup";
import { MemberUser } from "./memberuser";
import { S3Path } from "./s3path";
/**
 * A list of users or sub groups that belong to a group. This is useful for user context filtering, where search results are filtered based on the user or their group access to documents.
 */
export declare class GroupMembers extends SpeakeasyBase {
    memberGroups?: MemberGroup[];
    memberUsers?: MemberUser[];
    s3PathforGroupMembers?: S3Path;
}
