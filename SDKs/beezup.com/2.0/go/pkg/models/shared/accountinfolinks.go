package shared

// AccountInfoLinks
// The different actions you can make on this account
type AccountInfoLinks struct {
	ActivateUserAccount    map[string]interface{} `json:"activateUserAccount,omitempty"`
	ChangeEmail            map[string]interface{} `json:"changeEmail"`
	ChangePassword         map[string]interface{} `json:"changePassword"`
	GetCreditCardInfo      map[string]interface{} `json:"getCreditCardInfo"`
	GetProfilePictureInfo  map[string]interface{} `json:"getProfilePictureInfo"`
	SaveCompanyInfo        map[string]interface{} `json:"saveCompanyInfo"`
	SaveCreditCardInfo     map[string]interface{} `json:"saveCreditCardInfo"`
	SavePersonalInfo       map[string]interface{} `json:"savePersonalInfo"`
	SaveProfilePictureInfo map[string]interface{} `json:"saveProfilePictureInfo"`
	Self                   map[string]interface{} `json:"self"`
}
