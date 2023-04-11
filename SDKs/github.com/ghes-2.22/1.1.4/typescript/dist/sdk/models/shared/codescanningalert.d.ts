import { SpeakeasyBase } from "../../../internal/utils";
import { CodeScanningAlertDismissedReasonEnum } from "./codescanningalertdismissedreasonenum";
import { CodeScanningAlertRule } from "./codescanningalertrule";
import { CodeScanningAlertStateEnum } from "./codescanningalertstateenum";
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * Response
 */
export declare class CodeScanningAlert extends SpeakeasyBase {
    /**
     * The time that the alert was created in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    createdAt: Date;
    /**
     * The time that the alert was dismissed in ISO 8601 format: `YYYY-MM-DDTHH:MM:SSZ`.
     */
    dismissedAt: Date;
    /**
     * Simple User
     */
    dismissedBy: NullableSimpleUser;
    /**
     * **Required when the state is dismissed.** The reason for dismissing or closing the alert. Can be one of: `false positive`, `won't fix`, and `used in tests`.
     */
    dismissedReason: CodeScanningAlertDismissedReasonEnum;
    /**
     * The GitHub URL of the alert resource.
     */
    htmlUrl: string;
    instances?: any;
    /**
     * The security alert number.
     */
    number: number;
    rule: CodeScanningAlertRule;
    /**
     * State of a code scanning alert.
     */
    state: CodeScanningAlertStateEnum;
    tool: CodeScanningAnalysisTool;
    /**
     * The REST API URL of the alert resource.
     */
    url: string;
}
