// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type CopyImageRequest struct {
	DestinationImageDescription *string `json:"DestinationImageDescription,omitempty"`
	DestinationImageName        string  `json:"DestinationImageName"`
	DestinationRegion           string  `json:"DestinationRegion"`
	SourceImageName             string  `json:"SourceImageName"`
}
