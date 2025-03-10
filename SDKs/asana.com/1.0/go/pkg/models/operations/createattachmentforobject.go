// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
	"openapi/pkg/models/shared"
)

type CreateAttachmentForObjectRequest struct {
	// The file you want to upload.
	//
	// *Note when using curl:*
	//
	// Be sure to add an `‘@’` before the file path, and use the `--form`
	// option instead of the `-d` option.
	//
	// When uploading PDFs with curl, force the content-type to be pdf by
	// appending the content type to the file path: `--form
	// "file=@file.pdf;type=application/pdf"`.
	AttachmentRequest shared.AttachmentRequest `request:"mediaType=multipart/form-data"`
	// Defines fields to return.
	// Some requests return *compact* representations of objects in order to conserve resources and complete the request more efficiently. Other times requests return more information than you may need. This option allows you to list the exact set of fields that the API should be sure to return for the objects. The field names should be provided as paths, described below.
	// The id of included objects will always be returned, regardless of the field options.
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	// Provides “pretty” output.
	// Provides the response in a “pretty” format. In the case of JSON this means doing proper line breaking and indentation to make it readable. This will take extra time and increase the response size so it is advisable only to use this during debugging.
	OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
}

// CreateAttachmentForObject200ApplicationJSON - Successfully uploaded the attachment to the parent object.
type CreateAttachmentForObject200ApplicationJSON struct {
	Data *shared.AttachmentResponse `json:"data,omitempty"`
}

type CreateAttachmentForObjectResponse struct {
	ContentType string
	// This usually occurs because of a missing or malformed parameter. Check the documentation and the syntax of your request and try again.
	ErrorResponse *shared.ErrorResponse
	StatusCode    int
	RawResponse   *http.Response
	// Successfully uploaded the attachment to the parent object.
	CreateAttachmentForObject200ApplicationJSONObject *CreateAttachmentForObject200ApplicationJSON
}
