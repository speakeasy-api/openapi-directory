import { SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";
import { Location } from "./location";
/**
 * Success
 */
export declare class PostCommentForPullRequestOutput extends SpeakeasyBase {
    afterBlobId?: string;
    afterCommitId?: string;
    beforeBlobId?: string;
    beforeCommitId?: string;
    comment?: Comment;
    location?: Location;
    pullRequestId?: string;
    repositoryName?: string;
}
