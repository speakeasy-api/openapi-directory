// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// Error - Authentication failed
type Error struct {
	Code       int64                  `json:"code"`
	Details    map[string]interface{} `json:"details,omitempty"`
	Href       string                 `json:"href"`
	Message    string                 `json:"message"`
	StatusCode int64                  `json:"statusCode"`
}
