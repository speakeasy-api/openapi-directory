import { SpeakeasyBase } from "../../../internal/utils";
import { CommitComment } from "./commitcomment";
/**
 * Timeline Commit Commented Event
 */
export declare class TimelineCommitCommentedEvent extends SpeakeasyBase {
    comments?: CommitComment[];
    commitId?: string;
    event?: string;
    nodeId?: string;
}
