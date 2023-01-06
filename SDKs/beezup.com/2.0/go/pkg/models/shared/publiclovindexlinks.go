package shared

type PublicLovIndexLinks struct {
	Lists map[string]LinksGetPublicListOfValuesLink `json:"lists,omitempty"`
	Self  map[string]interface{}                    `json:"self,omitempty"`
}
