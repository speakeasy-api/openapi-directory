// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type StopFleetActionsInput struct {
	Actions  []FleetActionEnum `json:"Actions"`
	FleetID  string            `json:"FleetId"`
	Location *string           `json:"Location,omitempty"`
}
