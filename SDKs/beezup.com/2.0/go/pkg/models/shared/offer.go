package shared

type Offer struct {
	Content *OfferContent              `json:"content,omitempty"`
	Info    *BeezUpCommonInfoSummaries `json:"info,omitempty"`
	Links   *OfferLinks                `json:"links,omitempty"`
}
