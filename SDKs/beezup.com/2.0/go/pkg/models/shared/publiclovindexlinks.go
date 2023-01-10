package shared

type PublicLovIndexLinks struct {
	Lists map[string]LinksGetPublicListOfValuesLink `json:"lists,omitempty"`
	Self  *LinksGetPublicLovIndexLink               `json:"self,omitempty"`
}
