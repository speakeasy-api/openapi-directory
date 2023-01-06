package shared

// AppPkgSubscription
// 'The data type represents the input parameters of "subscription operation" to notification of application package management for the onboarding, or operational state change of application package.'
type AppPkgSubscription struct {
	AppPkgFilter     []string                   `json:"appPkgFilter,omitempty"`
	CallbackURI      string                     `json:"callbackUri"`
	SubsctiptionType SubsctiptionTypeAppPkgEnum `json:"subsctiptionType"`
}
