// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"net/http"
)

type PutEmailIdentityFeedbackAttributesRequestBody struct {
	// <p>Sets the feedback forwarding configuration for the identity.</p> <p>If the value is <code>true</code>, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the <code>Return-Path</code> header of the original email.</p> <p>You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).</p>
	EmailForwardingEnabled *bool `json:"EmailForwardingEnabled,omitempty"`
}

type PutEmailIdentityFeedbackAttributesRequest struct {
	// The email identity.
	EmailIdentity     string                                        `pathParam:"style=simple,explode=false,name=EmailIdentity"`
	RequestBody       PutEmailIdentityFeedbackAttributesRequestBody `request:"mediaType=application/json"`
	XAmzAlgorithm     *string                                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PutEmailIdentityFeedbackAttributesResponse struct {
	// BadRequestException
	BadRequestException interface{}
	ContentType         string
	// NotFoundException
	NotFoundException interface{}
	// Success
	PutEmailIdentityFeedbackAttributesResponse map[string]interface{}
	StatusCode                                 int
	RawResponse                                *http.Response
	// TooManyRequestsException
	TooManyRequestsException interface{}
}
