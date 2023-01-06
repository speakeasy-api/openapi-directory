package shared

type ListAwsDefaultServiceQuotasResponse struct {
	NextToken *string         `json:"NextToken,omitempty"`
	Quotas    []ServiceQuota1 `json:"Quotas,omitempty"`
}
