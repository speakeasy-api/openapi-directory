package shared

type CreateContractResponse struct {
	Info  *BeezUpCommonInfoSummaries   `json:"info,omitempty"`
	Links *CreateContractResponseLinks `json:"links,omitempty"`
}
