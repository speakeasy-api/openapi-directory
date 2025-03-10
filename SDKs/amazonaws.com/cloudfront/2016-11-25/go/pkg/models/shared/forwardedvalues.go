// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ForwardedValues - A complex type that specifies how CloudFront handles query strings and cookies.
type ForwardedValues struct {
	Cookies              CookiePreference
	Headers              *Headers
	QueryString          bool
	QueryStringCacheKeys *QueryStringCacheKeys
}
