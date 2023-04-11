import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifying information for the git-user
 */
export declare class GitCommitAuthor extends SpeakeasyBase {
    /**
     * Timestamp of the commit
     */
    date: Date;
    /**
     * Git email address of the user
     */
    email: string;
    /**
     * Name of the git user
     */
    name: string;
}
/**
 * Identifying information for the git-user
 */
export declare class GitCommitCommitter extends SpeakeasyBase {
    /**
     * Timestamp of the commit
     */
    date: Date;
    /**
     * Git email address of the user
     */
    email: string;
    /**
     * Name of the git user
     */
    name: string;
}
export declare class GitCommitParents extends SpeakeasyBase {
    htmlUrl: string;
    /**
     * SHA for the commit
     */
    sha: string;
    url: string;
}
export declare class GitCommitTree extends SpeakeasyBase {
    /**
     * SHA for the commit
     */
    sha: string;
    url: string;
}
export declare class GitCommitVerification extends SpeakeasyBase {
    payload: string;
    reason: string;
    signature: string;
    verified: boolean;
}
/**
 * Low-level Git commit operations within a repository
 */
export declare class GitCommit extends SpeakeasyBase {
    /**
     * Identifying information for the git-user
     */
    author: GitCommitAuthor;
    /**
     * Identifying information for the git-user
     */
    committer: GitCommitCommitter;
    htmlUrl: string;
    /**
     * Message describing the purpose of the commit
     */
    message: string;
    nodeId: string;
    parents: GitCommitParents[];
    /**
     * SHA for the commit
     */
    sha: string;
    tree: GitCommitTree;
    url: string;
    verification: GitCommitVerification;
}
