// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type UpdateContributorInsightsInput struct {
	ContributorInsightsAction ContributorInsightsActionEnum `json:"ContributorInsightsAction"`
	IndexName                 *string                       `json:"IndexName,omitempty"`
	TableName                 string                        `json:"TableName"`
}
