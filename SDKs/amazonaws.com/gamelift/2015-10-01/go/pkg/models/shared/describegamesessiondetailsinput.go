// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type DescribeGameSessionDetailsInput struct {
	AliasID       *string `json:"AliasId,omitempty"`
	FleetID       *string `json:"FleetId,omitempty"`
	GameSessionID *string `json:"GameSessionId,omitempty"`
	Limit         *int64  `json:"Limit,omitempty"`
	Location      *string `json:"Location,omitempty"`
	NextToken     *string `json:"NextToken,omitempty"`
	StatusFilter  *string `json:"StatusFilter,omitempty"`
}
