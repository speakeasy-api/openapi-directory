package shared

type HTTPMethodEnum string

const (
	HTTPMethodEnumGet    HTTPMethodEnum = "GET"
	HTTPMethodEnumPost   HTTPMethodEnum = "POST"
	HTTPMethodEnumPatch  HTTPMethodEnum = "PATCH"
	HTTPMethodEnumDelete HTTPMethodEnum = "DELETE"
	HTTPMethodEnumPut    HTTPMethodEnum = "PUT"
	HTTPMethodEnumHead   HTTPMethodEnum = "HEAD"
)
