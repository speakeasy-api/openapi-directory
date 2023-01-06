package shared

type UserFriendInfo struct {
	Company              string  `json:"company"`
	CountryIsoCodeAlpha3 string  `json:"countryIsoCodeAlpha3"`
	Email                string  `json:"email"`
	FirstName            string  `json:"firstName"`
	LastName             string  `json:"lastName"`
	ProfilePictureURL    *string `json:"profilePictureUrl,omitempty"`
	UserID               string  `json:"userId"`
	WhatIDo              *string `json:"whatIDo,omitempty"`
}
