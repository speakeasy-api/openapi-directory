// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package operations

import (
	"encoding/json"
	"fmt"
	"net/http"
	"openapi/pkg/models/shared"
)

type RatcrSecurity struct {
	APIKey   string `security:"scheme,type=apiKey,subtype=header,name=X-APISETU-APIKEY"`
	ClientID string `security:"scheme,type=apiKey,subtype=header,name=X-APISETU-CLIENTID"`
}

type RatcrRequestBodyCertificateParameters struct {
	// Full name
	FullName string `json:"FullName"`
	// Card No
	CardNo string `json:"card_no"`
}

// RatcrRequestBodyFormatEnum - The format of the certificate in response.
type RatcrRequestBodyFormatEnum string

const (
	RatcrRequestBodyFormatEnumPdf RatcrRequestBodyFormatEnum = "pdf"
)

func (e RatcrRequestBodyFormatEnum) ToPointer() *RatcrRequestBodyFormatEnum {
	return &e
}

func (e *RatcrRequestBodyFormatEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "pdf":
		*e = RatcrRequestBodyFormatEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for RatcrRequestBodyFormatEnum: %v", v)
	}
}

// RatcrRequestBody - Request format
type RatcrRequestBody struct {
	CertificateParameters *RatcrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *shared.ConsentArtifactSchema          `json:"consentArtifact,omitempty"`
	// The format of the certificate in response.
	Format RatcrRequestBodyFormatEnum `json:"format"`
	// A unique transaction id for this request in UUID format. It is used for tracking the request.
	TxnID string `json:"txnId"`
}

type Ratcr504ApplicationJSONErrorEnum string

const (
	Ratcr504ApplicationJSONErrorEnumGatewayTimeout Ratcr504ApplicationJSONErrorEnum = "gateway_timeout"
)

func (e Ratcr504ApplicationJSONErrorEnum) ToPointer() *Ratcr504ApplicationJSONErrorEnum {
	return &e
}

func (e *Ratcr504ApplicationJSONErrorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "gateway_timeout":
		*e = Ratcr504ApplicationJSONErrorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr504ApplicationJSONErrorEnum: %v", v)
	}
}

type Ratcr504ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ratcr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

func (e Ratcr504ApplicationJSONErrorDescriptionEnum) ToPointer() *Ratcr504ApplicationJSONErrorDescriptionEnum {
	return &e
}

func (e *Ratcr504ApplicationJSONErrorDescriptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Publisher service did not respond in time":
		*e = Ratcr504ApplicationJSONErrorDescriptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr504ApplicationJSONErrorDescriptionEnum: %v", v)
	}
}

// Ratcr504ApplicationJSON - Gateway timeout
type Ratcr504ApplicationJSON struct {
	Error            *Ratcr504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr503ApplicationJSONErrorEnum string

const (
	Ratcr503ApplicationJSONErrorEnumServiceUnavailable Ratcr503ApplicationJSONErrorEnum = "service_unavailable"
)

func (e Ratcr503ApplicationJSONErrorEnum) ToPointer() *Ratcr503ApplicationJSONErrorEnum {
	return &e
}

func (e *Ratcr503ApplicationJSONErrorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "service_unavailable":
		*e = Ratcr503ApplicationJSONErrorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr503ApplicationJSONErrorEnum: %v", v)
	}
}

type Ratcr503ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ratcr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

func (e Ratcr503ApplicationJSONErrorDescriptionEnum) ToPointer() *Ratcr503ApplicationJSONErrorDescriptionEnum {
	return &e
}

func (e *Ratcr503ApplicationJSONErrorDescriptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Publisher service is temporarily unavailable":
		*e = Ratcr503ApplicationJSONErrorDescriptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr503ApplicationJSONErrorDescriptionEnum: %v", v)
	}
}

// Ratcr503ApplicationJSON - Service unavailable
type Ratcr503ApplicationJSON struct {
	Error            *Ratcr503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr502ApplicationJSONErrorEnum string

const (
	Ratcr502ApplicationJSONErrorEnumBadGatewy Ratcr502ApplicationJSONErrorEnum = "bad_gatewy"
)

func (e Ratcr502ApplicationJSONErrorEnum) ToPointer() *Ratcr502ApplicationJSONErrorEnum {
	return &e
}

func (e *Ratcr502ApplicationJSONErrorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "bad_gatewy":
		*e = Ratcr502ApplicationJSONErrorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr502ApplicationJSONErrorEnum: %v", v)
	}
}

type Ratcr502ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ratcr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

func (e Ratcr502ApplicationJSONErrorDescriptionEnum) ToPointer() *Ratcr502ApplicationJSONErrorDescriptionEnum {
	return &e
}

func (e *Ratcr502ApplicationJSONErrorDescriptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Publisher service returned an invalid response":
		*e = Ratcr502ApplicationJSONErrorDescriptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr502ApplicationJSONErrorDescriptionEnum: %v", v)
	}
}

// Ratcr502ApplicationJSON - Bad gateway
type Ratcr502ApplicationJSON struct {
	Error            *Ratcr502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr500ApplicationJSONErrorEnum string

const (
	Ratcr500ApplicationJSONErrorEnumInternalServerError Ratcr500ApplicationJSONErrorEnum = "internal_server_error"
)

func (e Ratcr500ApplicationJSONErrorEnum) ToPointer() *Ratcr500ApplicationJSONErrorEnum {
	return &e
}

func (e *Ratcr500ApplicationJSONErrorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "internal_server_error":
		*e = Ratcr500ApplicationJSONErrorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr500ApplicationJSONErrorEnum: %v", v)
	}
}

type Ratcr500ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr500ApplicationJSONErrorDescriptionEnumInternalServerError Ratcr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

func (e Ratcr500ApplicationJSONErrorDescriptionEnum) ToPointer() *Ratcr500ApplicationJSONErrorDescriptionEnum {
	return &e
}

func (e *Ratcr500ApplicationJSONErrorDescriptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Internal server error":
		*e = Ratcr500ApplicationJSONErrorDescriptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr500ApplicationJSONErrorDescriptionEnum: %v", v)
	}
}

// Ratcr500ApplicationJSON - Internal server error
type Ratcr500ApplicationJSON struct {
	Error            *Ratcr500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr404ApplicationJSONErrorEnum string

const (
	Ratcr404ApplicationJSONErrorEnumRecordNotFound Ratcr404ApplicationJSONErrorEnum = "record_not_found"
	Ratcr404ApplicationJSONErrorEnumURLNotFound    Ratcr404ApplicationJSONErrorEnum = "url_not_found"
)

func (e Ratcr404ApplicationJSONErrorEnum) ToPointer() *Ratcr404ApplicationJSONErrorEnum {
	return &e
}

func (e *Ratcr404ApplicationJSONErrorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "record_not_found":
		fallthrough
	case "url_not_found":
		*e = Ratcr404ApplicationJSONErrorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr404ApplicationJSONErrorEnum: %v", v)
	}
}

type Ratcr404ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ratcr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ratcr404ApplicationJSONErrorDescriptionEnumYourAPIURLOrPathIsIncorrect Ratcr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

func (e Ratcr404ApplicationJSONErrorDescriptionEnum) ToPointer() *Ratcr404ApplicationJSONErrorDescriptionEnum {
	return &e
}

func (e *Ratcr404ApplicationJSONErrorDescriptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "No record found":
		fallthrough
	case "Your API url or path is incorrect":
		*e = Ratcr404ApplicationJSONErrorDescriptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr404ApplicationJSONErrorDescriptionEnum: %v", v)
	}
}

// Ratcr404ApplicationJSON - No record found
type Ratcr404ApplicationJSON struct {
	Error            *Ratcr404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr401ApplicationJSONErrorEnum string

const (
	Ratcr401ApplicationJSONErrorEnumInvalidAuthentication Ratcr401ApplicationJSONErrorEnum = "invalid_authentication"
	Ratcr401ApplicationJSONErrorEnumInvalidAuthorization  Ratcr401ApplicationJSONErrorEnum = "invalid_authorization"
)

func (e Ratcr401ApplicationJSONErrorEnum) ToPointer() *Ratcr401ApplicationJSONErrorEnum {
	return &e
}

func (e *Ratcr401ApplicationJSONErrorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "invalid_authentication":
		fallthrough
	case "invalid_authorization":
		*e = Ratcr401ApplicationJSONErrorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr401ApplicationJSONErrorEnum: %v", v)
	}
}

type Ratcr401ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ratcr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ratcr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ratcr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

func (e Ratcr401ApplicationJSONErrorDescriptionEnum) ToPointer() *Ratcr401ApplicationJSONErrorDescriptionEnum {
	return &e
}

func (e *Ratcr401ApplicationJSONErrorDescriptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Authentication failed":
		fallthrough
	case "You are not authorized to use this API":
		*e = Ratcr401ApplicationJSONErrorDescriptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr401ApplicationJSONErrorDescriptionEnum: %v", v)
	}
}

// Ratcr401ApplicationJSON - Unauthorized access
type Ratcr401ApplicationJSON struct {
	Error            *Ratcr401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ratcr400ApplicationJSONErrorEnum string

const (
	Ratcr400ApplicationJSONErrorEnumMissingParameter Ratcr400ApplicationJSONErrorEnum = "missing_parameter"
	Ratcr400ApplicationJSONErrorEnumInvalidParameter Ratcr400ApplicationJSONErrorEnum = "invalid_parameter"
	Ratcr400ApplicationJSONErrorEnumInvalidFormat    Ratcr400ApplicationJSONErrorEnum = "invalid_format"
	Ratcr400ApplicationJSONErrorEnumInvalidTxnid     Ratcr400ApplicationJSONErrorEnum = "invalid_txnid"
	Ratcr400ApplicationJSONErrorEnumInvalidConsentid Ratcr400ApplicationJSONErrorEnum = "invalid_consentid"
)

func (e Ratcr400ApplicationJSONErrorEnum) ToPointer() *Ratcr400ApplicationJSONErrorEnum {
	return &e
}

func (e *Ratcr400ApplicationJSONErrorEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "missing_parameter":
		fallthrough
	case "invalid_parameter":
		fallthrough
	case "invalid_format":
		fallthrough
	case "invalid_txnid":
		fallthrough
	case "invalid_consentid":
		*e = Ratcr400ApplicationJSONErrorEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr400ApplicationJSONErrorEnum: %v", v)
	}
}

type Ratcr400ApplicationJSONErrorDescriptionEnum string

const (
	Ratcr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ratcr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ratcr400ApplicationJSONErrorDescriptionEnumBadRequest                              Ratcr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ratcr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ratcr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ratcr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ratcr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ratcr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ratcr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

func (e Ratcr400ApplicationJSONErrorDescriptionEnum) ToPointer() *Ratcr400ApplicationJSONErrorDescriptionEnum {
	return &e
}

func (e *Ratcr400ApplicationJSONErrorDescriptionEnum) UnmarshalJSON(data []byte) error {
	var v string
	if err := json.Unmarshal(data, &v); err != nil {
		return err
	}
	switch v {
	case "Please provide all mandatory parameters":
		fallthrough
	case "Bad request":
		fallthrough
	case "The format parameter is invalid":
		fallthrough
	case "The txnId parameter must be in UUID format":
		fallthrough
	case "The consentId parameter must be in UUID format":
		*e = Ratcr400ApplicationJSONErrorDescriptionEnum(v)
		return nil
	default:
		return fmt.Errorf("invalid value for Ratcr400ApplicationJSONErrorDescriptionEnum: %v", v)
	}
}

// Ratcr400ApplicationJSON - Bad request
type Ratcr400ApplicationJSON struct {
	Error            *Ratcr400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ratcr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RatcrResponse struct {
	ContentType string
	StatusCode  int
	RawResponse *http.Response
	// Bad request
	Ratcr400ApplicationJSONObject *Ratcr400ApplicationJSON
	// Unauthorized access
	Ratcr401ApplicationJSONObject *Ratcr401ApplicationJSON
	// No record found
	Ratcr404ApplicationJSONObject *Ratcr404ApplicationJSON
	// Internal server error
	Ratcr500ApplicationJSONObject *Ratcr500ApplicationJSON
	// Bad gateway
	Ratcr502ApplicationJSONObject *Ratcr502ApplicationJSON
	// Service unavailable
	Ratcr503ApplicationJSONObject *Ratcr503ApplicationJSON
	// Gateway timeout
	Ratcr504ApplicationJSONObject *Ratcr504ApplicationJSON
}
