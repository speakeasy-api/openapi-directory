// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type AddApplicationCloudWatchLoggingOptionRequest struct {
	ApplicationName             string                  `json:"ApplicationName"`
	CloudWatchLoggingOption     CloudWatchLoggingOption `json:"CloudWatchLoggingOption"`
	CurrentApplicationVersionID int64                   `json:"CurrentApplicationVersionId"`
}
