// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ListTranscriptionJobsResponse - Success
type ListTranscriptionJobsResponse struct {
	NextToken                 *string                     `json:"NextToken,omitempty"`
	Status                    *TranscriptionJobStatusEnum `json:"Status,omitempty"`
	TranscriptionJobSummaries []TranscriptionJobSummary   `json:"TranscriptionJobSummaries,omitempty"`
}
