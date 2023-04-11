import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Provides the configuration information to include certain types of GitHub content. You can configure to index repository files only, or also include issues and pull requests, comments, and comment attachments.
 */
export declare class GitHubDocumentCrawlProperties extends SpeakeasyBase {
    crawlIssue?: boolean;
    crawlIssueComment?: boolean;
    crawlIssueCommentAttachment?: boolean;
    crawlPullRequest?: boolean;
    crawlPullRequestComment?: boolean;
    crawlPullRequestCommentAttachment?: boolean;
    crawlRepositoryDocuments?: boolean;
}
