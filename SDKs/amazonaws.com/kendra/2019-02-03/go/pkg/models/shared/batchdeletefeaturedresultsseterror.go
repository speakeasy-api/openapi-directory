// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// BatchDeleteFeaturedResultsSetError - Provides information about a set of featured results that couldn't be removed from an index by the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteFeaturedResultsSet.html">BatchDeleteFeaturedResultsSet</a> API.
type BatchDeleteFeaturedResultsSetError struct {
	ErrorCode    ErrorCodeEnum `json:"ErrorCode"`
	ErrorMessage string        `json:"ErrorMessage"`
	ID           string        `json:"Id"`
}
