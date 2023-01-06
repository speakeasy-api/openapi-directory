package shared

// OriginRequestPolicyCookiesConfig1
// An object that determines whether any cookies in viewer requests (and if so, which cookies) are included in requests that CloudFront sends to the origin.
type OriginRequestPolicyCookiesConfig1 struct {
	CookieBehavior map[string]interface{}
	Cookies        *CookieNames
}
