import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an 'issue_body' secret scanning location type. This location type shows that a secret was detected in the body of an issue.
 */
export declare class SecretScanningLocationIssueBody extends SpeakeasyBase {
    /**
     * The API URL to get the issue where the secret was detected.
     */
    issueBodyUrl: string;
}
