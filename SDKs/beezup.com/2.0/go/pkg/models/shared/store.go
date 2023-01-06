package shared

import (
	"time"
)

type Store struct {
	CountryIsoCodeAlpha3 string            `json:"countryIsoCodeAlpha3"`
	CreationUtcDate      time.Time         `json:"creationUtcDate"`
	CurrencyCode         string            `json:"currencyCode"`
	GoVersion            int32             `json:"goVersion"`
	Links                StoreLinks        `json:"links"`
	Name                 string            `json:"name"`
	OfferID              int32             `json:"offerId"`
	OfferName            string            `json:"offerName"`
	OwnerUserID          string            `json:"ownerUserId"`
	Sectors              []string          `json:"sectors"`
	ShareCount           int64             `json:"shareCount"`
	Status               StoreStatusEnum   `json:"status"`
	StoreID              string            `json:"storeId"`
	URL                  string            `json:"url"`
	UserRole             StoreUserRoleEnum `json:"userRole"`
}
