package operations

import (
	"openapi/pkg/models/shared"
)

type InstitutionHrfeedUploadRequestBodyHrfeed struct {
	Content []byte `multipartForm:"content"`
	Hrfeed  string `multipartForm:"name=hrfeed"`
}

type InstitutionHrfeedUploadRequestBody struct {
	Hrfeed *InstitutionHrfeedUploadRequestBodyHrfeed `multipartForm:"file"`
}

type InstitutionHrfeedUploadSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type InstitutionHrfeedUploadRequest struct {
	Request  *InstitutionHrfeedUploadRequestBody `request:"mediaType=multipart/form-data"`
	Security InstitutionHrfeedUploadSecurity
}

type InstitutionHrfeedUploadResponse struct {
	ContentType     string
	ErrorMessage    *shared.ErrorMessage
	ResponseMessage *shared.ResponseMessage
	StatusCode      int64
}
