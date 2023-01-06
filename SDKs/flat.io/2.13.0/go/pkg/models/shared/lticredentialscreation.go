package shared

// LtiCredentialsCreation
// Creation of a couple of LTI 1.x OAuth credentials
type LtiCredentialsCreation struct {
	Lms  LmsNameEnum `json:"lms"`
	Name string      `json:"name"`
}
