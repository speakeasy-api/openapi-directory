// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

// ActivityTypeInfos - Contains a paginated list of activity type information structures.
type ActivityTypeInfos struct {
	NextPageToken *string            `json:"nextPageToken,omitempty"`
	TypeInfos     []ActivityTypeInfo `json:"typeInfos"`
}
