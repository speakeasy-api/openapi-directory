package shared

type ResponseFormatEnum string

const (
	ResponseFormatEnumJSON    ResponseFormatEnum = "json"
	ResponseFormatEnumJsonp   ResponseFormatEnum = "jsonp"
	ResponseFormatEnumMsgpack ResponseFormatEnum = "msgpack"
	ResponseFormatEnumHTML    ResponseFormatEnum = "html"
)
