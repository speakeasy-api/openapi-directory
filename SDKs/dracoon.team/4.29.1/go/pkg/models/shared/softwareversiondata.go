// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

import (
	"time"
)

// SoftwareVersionData - Software version information
type SoftwareVersionData struct {
	// Build date
	BuildDate time.Time `json:"buildDate"`
	// &#128640; Since v4.24.0
	//
	// Determines if the DRACOON Core is deployed in the cloud environment
	IsDracoonCloud *bool `json:"isDracoonCloud,omitempty"`
	// REST API version
	RestAPIVersion string `json:"restApiVersion"`
	// Revision number
	ScmRevisionNumber string `json:"scmRevisionNumber"`
	// DRACOON server version
	SdsServerVersion string `json:"sdsServerVersion"`
}
