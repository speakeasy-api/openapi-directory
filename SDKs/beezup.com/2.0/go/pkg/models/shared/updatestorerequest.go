package shared

type UpdateStoreRequest struct {
	Name    string   `json:"name"`
	Sectors []string `json:"sectors"`
	URL     string   `json:"url"`
}
