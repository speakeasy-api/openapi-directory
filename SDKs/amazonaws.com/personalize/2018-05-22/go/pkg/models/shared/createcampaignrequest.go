package shared

type CreateCampaignRequest struct {
	CampaignConfig     *CampaignConfig `json:"campaignConfig,omitempty"`
	MinProvisionedTPS  *int64          `json:"minProvisionedTPS,omitempty"`
	Name               string          `json:"name"`
	SolutionVersionArn string          `json:"solutionVersionArn"`
}
