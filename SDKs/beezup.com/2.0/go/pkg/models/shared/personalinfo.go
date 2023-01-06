package shared

type PersonalInfo struct {
	BeezUPTimeZoneID int32   `json:"beezUPTimeZoneId"`
	FirstName        string  `json:"firstName"`
	LastName         string  `json:"lastName"`
	PhoneNumber      string  `json:"phoneNumber"`
	WhatIDo          *string `json:"whatIDo,omitempty"`
}
