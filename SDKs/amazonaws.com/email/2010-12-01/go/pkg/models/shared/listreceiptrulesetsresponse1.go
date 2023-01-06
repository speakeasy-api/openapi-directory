package shared

// ListReceiptRuleSetsResponse1
// A list of receipt rule sets that exist under your AWS account.
type ListReceiptRuleSetsResponse1 struct {
	NextToken *string
	RuleSets  map[string]interface{}
}
