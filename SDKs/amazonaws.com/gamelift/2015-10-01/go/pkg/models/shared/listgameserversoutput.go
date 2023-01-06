package shared

type ListGameServersOutput struct {
	GameServers []GameServer1 `json:"GameServers,omitempty"`
	NextToken   *string       `json:"NextToken,omitempty"`
}
