import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an 'issue_comment' secret scanning location type. This location type shows that a secret was detected in a comment on an issue.
 */
export declare class SecretScanningLocationIssueComment extends SpeakeasyBase {
    /**
     * The API URL to get the issue comment where the secret was detected.
     */
    issueCommentUrl: string;
}
