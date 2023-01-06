package shared

import (
	"time"
)

// AssumeRoleResponseCredentials
// Amazon Web Services credentials for API authentication.
type AssumeRoleResponseCredentials struct {
	AccessKeyID     string
	Expiration      time.Time
	SecretAccessKey string
	SessionToken    string
}

// AssumeRoleResponse
// Contains the response to a successful <a>AssumeRole</a> request, including temporary Amazon Web Services credentials that can be used to make Amazon Web Services requests.
type AssumeRoleResponse struct {
	AssumedRoleUser  *AssumedRoleUser
	Credentials      *AssumeRoleResponseCredentials
	PackedPolicySize *int64
	SourceIdentity   *string
}
