package shared

type UserLovIndexLinks struct {
	Lists map[string]LinksGetUserListOfValuesLink `json:"lists,omitempty"`
	Self  *LinksGetUserLovIndexLink               `json:"self,omitempty"`
}
