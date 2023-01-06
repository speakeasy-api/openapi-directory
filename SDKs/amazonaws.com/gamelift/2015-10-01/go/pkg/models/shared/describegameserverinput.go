package shared

type DescribeGameServerInput struct {
	GameServerGroupName string                 `json:"GameServerGroupName"`
	GameServerID        map[string]interface{} `json:"GameServerId"`
}
