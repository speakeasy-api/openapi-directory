import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The severity of the alert.
 */
export declare enum CodeScanningAlertRuleSummarySeverityEnum {
    None = "none",
    Note = "note",
    Warning = "warning",
    Error = "error"
}
export declare class CodeScanningAlertRuleSummary extends SpeakeasyBase {
    /**
     * A short description of the rule used to detect the alert.
     */
    description?: string;
    /**
     * A unique identifier for the rule used to detect the alert.
     */
    id?: string;
    /**
     * The name of the rule used to detect the alert.
     */
    name?: string;
    /**
     * The severity of the alert.
     */
    severity?: CodeScanningAlertRuleSummarySeverityEnum;
    /**
     * A set of tags applicable for the rule.
     */
    tags?: string[];
}
