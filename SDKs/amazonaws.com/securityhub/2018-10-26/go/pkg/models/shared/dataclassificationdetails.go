// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// DataClassificationDetails - Provides details about sensitive data that was detected on a resource.
type DataClassificationDetails struct {
	DetailedResultsLocation *string               `json:"DetailedResultsLocation,omitempty"`
	Result                  *ClassificationResult `json:"Result,omitempty"`
}
