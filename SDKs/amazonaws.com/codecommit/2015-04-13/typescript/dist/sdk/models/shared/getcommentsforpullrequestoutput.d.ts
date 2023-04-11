import { SpeakeasyBase } from "../../../internal/utils";
import { CommentsForPullRequest } from "./commentsforpullrequest";
/**
 * Success
 */
export declare class GetCommentsForPullRequestOutput extends SpeakeasyBase {
    commentsForPullRequestData?: CommentsForPullRequest[];
    nextToken?: string;
}
