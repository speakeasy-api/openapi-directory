package operations

import (
	"openapi/pkg/models/shared"
)

type SignUpIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type SignUpID401ApplicationJSON struct {
	Error            *string `json:"error,omitempty"`
	ErrorDescription *string `json:"error_description,omitempty"`
}

type SignUpID500ApplicationJSON struct {
	Error            *interface{} `json:"error,omitempty"`
	ErrorDescription *interface{} `json:"error_description,omitempty"`
}

type SignUpIDRequest struct {
	Request  *interface{} `request:"mediaType=multipart/form-data"`
	Security SignUpIDSecurity
}

type SignUpIDResponse struct {
	ContentType                      string
	DemoAuthResponse                 *interface{}
	SIGNUPID400ApplicationJSONOneOf  *interface{}
	SIGNUPID401ApplicationJSONObject *SignUpID401ApplicationJSON
	SIGNUPID500ApplicationJSONObject *SignUpID500ApplicationJSON
	StatusCode                       int64
}
