package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFormByIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type UpdateFormByIDHeaders struct {
	EvAccessToken string `header:"style=simple,explode=false,name=ev-access-token"`
	EvAPIKey      string `header:"style=simple,explode=false,name=ev-api-key"`
}

type UpdateFormByIDUpdateFormByIDRequestBodyElementsSettings struct {
	IsRequired      *bool `json:"isRequired,omitempty"`
	SenderEmail     *bool `json:"senderEmail,omitempty"`
	UseAsFolderName *bool `json:"useAsFolderName,omitempty"`
}

type UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum string

const (
	UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnumName       UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum = "name"
	UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnumEmail      UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum = "email"
	UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnumText       UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum = "text"
	UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnumTextarea   UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum = "textarea"
	UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnumUploadArea UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum = "upload_area"
)

type UpdateFormByIDUpdateFormByIDRequestBodyElements struct {
	ID       *int64                                                   `json:"id,omitempty"`
	Name     *string                                                  `json:"name,omitempty"`
	Order    *int64                                                   `json:"order,omitempty"`
	Settings *UpdateFormByIDUpdateFormByIDRequestBodyElementsSettings `json:"settings,omitempty"`
	Type     *UpdateFormByIDUpdateFormByIDRequestBodyElementsTypeEnum `json:"type,omitempty"`
}

// UpdateFormByIDUpdateFormByIDRequestBody
// CSS Styles of the form.
type UpdateFormByIDUpdateFormByIDRequestBody struct {
	CSSStyles        *string                                           `json:"cssStyles,omitempty"`
	Elements         []UpdateFormByIDUpdateFormByIDRequestBodyElements `json:"elements,omitempty"`
	FormDescription  *string                                           `json:"formDescription,omitempty"`
	SubmitButtonText *string                                           `json:"submitButtonText,omitempty"`
	SuccessMessage   *string                                           `json:"successMessage,omitempty"`
}

type UpdateFormByIDRequest struct {
	PathParams UpdateFormByIDPathParams
	Headers    UpdateFormByIDHeaders
	Request    *UpdateFormByIDUpdateFormByIDRequestBody `request:"mediaType=application/json"`
}

type UpdateFormByIDResponse struct {
	ContentType  string
	FormResponse *shared.FormResponse
	StatusCode   int64
}
