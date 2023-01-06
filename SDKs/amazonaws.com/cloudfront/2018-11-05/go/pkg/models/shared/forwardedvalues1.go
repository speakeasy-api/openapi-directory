package shared

// ForwardedValues1
// A complex type that specifies how CloudFront handles query strings and cookies.
type ForwardedValues1 struct {
	Cookies              CookiePreference1
	Headers              *Headers
	QueryString          bool
	QueryStringCacheKeys *QueryStringCacheKeys
}
