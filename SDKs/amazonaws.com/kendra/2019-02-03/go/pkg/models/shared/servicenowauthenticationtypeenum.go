package shared

type ServiceNowAuthenticationTypeEnum string

const (
	ServiceNowAuthenticationTypeEnumHTTPBasic ServiceNowAuthenticationTypeEnum = "HTTP_BASIC"
	ServiceNowAuthenticationTypeEnumOauth2    ServiceNowAuthenticationTypeEnum = "OAUTH2"
)
