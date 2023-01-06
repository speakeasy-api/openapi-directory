package shared

type Address struct {
	Address     string      `json:"address"`
	City        string      `json:"city"`
	CountryCode CountryEnum `json:"country_code"`
	PostCode    string      `json:"post_code"`
}
