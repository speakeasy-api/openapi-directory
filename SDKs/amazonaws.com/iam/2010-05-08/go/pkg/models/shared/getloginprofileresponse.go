package shared

import (
	"time"
)

// GetLoginProfileResponseLoginProfile
// <p>Contains the user name and password create date for a user.</p> <p> This data type is used as a response element in the <a>CreateLoginProfile</a> and <a>GetLoginProfile</a> operations. </p>
type GetLoginProfileResponseLoginProfile struct {
	CreateDate            time.Time
	PasswordResetRequired *bool
	UserName              string
}

// GetLoginProfileResponse
// Contains the response to a successful <a>GetLoginProfile</a> request.
type GetLoginProfileResponse struct {
	LoginProfile GetLoginProfileResponseLoginProfile
}
