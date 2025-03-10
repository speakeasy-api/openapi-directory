// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
)

// GETUpdateCustomVerificationEmailTemplateActionEnum
type GETUpdateCustomVerificationEmailTemplateActionEnum string

const (
	GETUpdateCustomVerificationEmailTemplateActionEnumUpdateCustomVerificationEmailTemplate GETUpdateCustomVerificationEmailTemplateActionEnum = "UpdateCustomVerificationEmailTemplate"
)

func (e GETUpdateCustomVerificationEmailTemplateActionEnum) ToPointer() *GETUpdateCustomVerificationEmailTemplateActionEnum {
	return &e
}

func (e *GETUpdateCustomVerificationEmailTemplateActionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "UpdateCustomVerificationEmailTemplate":
		*e = GETUpdateCustomVerificationEmailTemplateActionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETUpdateCustomVerificationEmailTemplateActionEnum: %v", v)
	}
}

// GETUpdateCustomVerificationEmailTemplateVersionEnum
type GETUpdateCustomVerificationEmailTemplateVersionEnum string

const (
	GETUpdateCustomVerificationEmailTemplateVersionEnumTwoThousandAndTen1201 GETUpdateCustomVerificationEmailTemplateVersionEnum = "2010-12-01"
)

func (e GETUpdateCustomVerificationEmailTemplateVersionEnum) ToPointer() *GETUpdateCustomVerificationEmailTemplateVersionEnum {
	return &e
}

func (e *GETUpdateCustomVerificationEmailTemplateVersionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "2010-12-01":
		*e = GETUpdateCustomVerificationEmailTemplateVersionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for GETUpdateCustomVerificationEmailTemplateVersionEnum: %v", v)
	}
}

type GETUpdateCustomVerificationEmailTemplateRequest struct {
	Action GETUpdateCustomVerificationEmailTemplateActionEnum `queryParam:"style=form,explode=true,name=Action"`
	// The URL that the recipient of the verification email is sent to if his or her address is not successfully verified.
	FailureRedirectionURL *string `queryParam:"style=form,explode=true,name=FailureRedirectionURL"`
	// The email address that the custom verification email is sent from.
	FromEmailAddress *string `queryParam:"style=form,explode=true,name=FromEmailAddress"`
	// The URL that the recipient of the verification email is sent to if his or her address is successfully verified.
	SuccessRedirectionURL *string `queryParam:"style=form,explode=true,name=SuccessRedirectionURL"`
	// The content of the custom verification email. The total size of the email must be less than 10 MB. The message body may contain HTML, with some limitations. For more information, see <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/custom-verification-emails.html#custom-verification-emails-faq">Custom Verification Email Frequently Asked Questions</a> in the <i>Amazon SES Developer Guide</i>.
	TemplateContent *string `queryParam:"style=form,explode=true,name=TemplateContent"`
	// The name of the custom verification email template that you want to update.
	TemplateName string `queryParam:"style=form,explode=true,name=TemplateName"`
	// The subject line of the custom verification email.
	TemplateSubject   *string                                             `queryParam:"style=form,explode=true,name=TemplateSubject"`
	Version           GETUpdateCustomVerificationEmailTemplateVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	XAmzAlgorithm     *string                                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GETUpdateCustomVerificationEmailTemplateResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int
	RawResponse *http.Response
}
