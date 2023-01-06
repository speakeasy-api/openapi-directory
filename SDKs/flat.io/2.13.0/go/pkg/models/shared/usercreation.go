package shared

// UserCreation
// User creation
type UserCreation struct {
	Email     *string          `json:"email,omitempty"`
	Firstname *string          `json:"firstname,omitempty"`
	Lastname  *string          `json:"lastname,omitempty"`
	Locale    *FlatLocalesEnum `json:"locale,omitempty"`
	Password  string           `json:"password"`
	Username  string           `json:"username"`
}
