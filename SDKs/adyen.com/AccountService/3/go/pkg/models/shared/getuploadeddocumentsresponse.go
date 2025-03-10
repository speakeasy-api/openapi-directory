// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// GetUploadedDocumentsResponse - OK - the request has succeeded.
type GetUploadedDocumentsResponse struct {
	// A list of the documents and their details.
	DocumentDetails []DocumentDetailWrapper `json:"documentDetails,omitempty"`
	// The reference of a request. Can be used to uniquely identify the request.
	PspReference *string `json:"pspReference,omitempty"`
	// The result code.
	ResultCode *string `json:"resultCode,omitempty"`
	// Indicates whether the request is processed asynchronously. Depending on the request's platform settings, the following scenarios may be applied:
	// * **true**: The request is queued and will be executed when the providing service is available in the order in which the requests are received.
	// * **false**: The processing of the request is immediately attempted; it may result in an error if the providing service is unavailable.
	SubmittedAsync *bool `json:"submittedAsync,omitempty"`
}
