package shared

type ListServiceQuotasResponse struct {
	NextToken *string         `json:"NextToken,omitempty"`
	Quotas    []ServiceQuota1 `json:"Quotas,omitempty"`
}
