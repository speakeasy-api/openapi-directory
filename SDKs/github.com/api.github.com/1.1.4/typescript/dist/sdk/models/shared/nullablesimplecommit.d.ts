import { SpeakeasyBase } from "../../../internal/utils";
export declare class NullableSimpleCommitAuthor extends SpeakeasyBase {
    email: string;
    name: string;
}
export declare class NullableSimpleCommitCommitter extends SpeakeasyBase {
    email: string;
    name: string;
}
/**
 * A commit.
 */
export declare class NullableSimpleCommit extends SpeakeasyBase {
    author: NullableSimpleCommitAuthor;
    committer: NullableSimpleCommitCommitter;
    id: string;
    message: string;
    timestamp: Date;
    treeId: string;
}
