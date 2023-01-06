package shared

type UpdateCampaignRequest struct {
	CampaignArn        string          `json:"campaignArn"`
	CampaignConfig     *CampaignConfig `json:"campaignConfig,omitempty"`
	MinProvisionedTPS  *int64          `json:"minProvisionedTPS,omitempty"`
	SolutionVersionArn *string         `json:"solutionVersionArn,omitempty"`
}
