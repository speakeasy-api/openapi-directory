import { SpeakeasyBase } from "../../../internal/utils";
import { DiffEntry } from "./diffentry";
import { NullableGitUser } from "./nullablegituser";
import { NullableSimpleUser } from "./nullablesimpleuser";
import { Verification } from "./verification";
export declare class CommitCommitTree extends SpeakeasyBase {
    sha: string;
    url: string;
}
export declare class CommitCommit extends SpeakeasyBase {
    /**
     * Metaproperties for Git author/committer information.
     */
    author: NullableGitUser;
    commentCount: number;
    /**
     * Metaproperties for Git author/committer information.
     */
    committer: NullableGitUser;
    message: string;
    tree: CommitCommitTree;
    url: string;
    verification?: Verification;
}
export declare class CommitParents extends SpeakeasyBase {
    htmlUrl?: string;
    sha: string;
    url: string;
}
export declare class CommitStats extends SpeakeasyBase {
    additions?: number;
    deletions?: number;
    total?: number;
}
/**
 * Commit
 */
export declare class Commit extends SpeakeasyBase {
    /**
     * A GitHub user.
     */
    author: NullableSimpleUser;
    commentsUrl: string;
    commit: CommitCommit;
    /**
     * A GitHub user.
     */
    committer: NullableSimpleUser;
    files?: DiffEntry[];
    htmlUrl: string;
    nodeId: string;
    parents: CommitParents[];
    sha: string;
    stats?: CommitStats;
    url: string;
}
