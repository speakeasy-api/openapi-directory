package shared

type CustomerIndexLovLinks struct {
	ActiveOfferLov               *BeezUpCommonLovLink3 `json:"activeOfferLov,omitempty"`
	BeezUPTimeZoneLov            *BeezUpCommonLovLink3 `json:"beezUPTimeZoneLov,omitempty"`
	ContractTerminationReasonLov *BeezUpCommonLovLink3 `json:"contractTerminationReasonLov,omitempty"`
	CountryLov                   *BeezUpCommonLovLink3 `json:"countryLov,omitempty"`
	CustomerStatusLov            *BeezUpCommonLovLink3 `json:"customerStatusLov,omitempty"`
	InvoicePaymentStatusLov      *BeezUpCommonLovLink3 `json:"invoicePaymentStatusLov,omitempty"`
	OfferLov                     *BeezUpCommonLovLink3 `json:"offerLov,omitempty"`
	StoreCountryLov              *BeezUpCommonLovLink3 `json:"storeCountryLov,omitempty"`
	StoreSectorLov               *BeezUpCommonLovLink3 `json:"storeSectorLov,omitempty"`
}
