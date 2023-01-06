package shared

type CodeScanningAlertDismissedReasonEnum string

const (
	CodeScanningAlertDismissedReasonEnumNull          CodeScanningAlertDismissedReasonEnum = "null"
	CodeScanningAlertDismissedReasonEnumFalsePositive CodeScanningAlertDismissedReasonEnum = "false positive"
	CodeScanningAlertDismissedReasonEnumWonTFix       CodeScanningAlertDismissedReasonEnum = "won't fix"
	CodeScanningAlertDismissedReasonEnumUsedInTests   CodeScanningAlertDismissedReasonEnum = "used in tests"
)
