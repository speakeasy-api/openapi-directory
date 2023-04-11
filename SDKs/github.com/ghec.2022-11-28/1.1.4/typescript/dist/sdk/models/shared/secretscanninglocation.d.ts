import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues), this field identifies the type of resource where the secret was found.
 */
export declare enum SecretScanningLocationTypeEnum {
    Commit = "commit",
    IssueTitle = "issue_title",
    IssueBody = "issue_body",
    IssueComment = "issue_comment"
}
export declare class SecretScanningLocation extends SpeakeasyBase {
    details: any;
    /**
     * The location type. Because secrets may be found in different types of resources (ie. code, comments, issues), this field identifies the type of resource where the secret was found.
     */
    type: SecretScanningLocationTypeEnum;
}
