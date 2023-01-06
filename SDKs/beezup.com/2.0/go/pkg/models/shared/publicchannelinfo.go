package shared

type PublicChannelInfo struct {
	HomeURL string   `json:"homeUrl"`
	LogoURL string   `json:"logoUrl"`
	Name    string   `json:"name"`
	Sectors []string `json:"sectors,omitempty"`
	Types   []string `json:"types"`
}
