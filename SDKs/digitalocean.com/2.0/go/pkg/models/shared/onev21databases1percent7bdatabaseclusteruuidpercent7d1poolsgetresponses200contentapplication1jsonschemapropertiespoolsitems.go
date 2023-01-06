package shared

type Onev21databases1Percent7BdatabaseClusterUUIDPercent7D1poolsGetResponses200ContentApplication1jsonSchemaPropertiesPoolsItems struct {
	Connection        map[string]interface{} `json:"connection,omitempty"`
	Db                string                 `json:"db"`
	Mode              string                 `json:"mode"`
	Name              string                 `json:"name"`
	PrivateConnection map[string]interface{} `json:"private_connection,omitempty"`
	Size              int32                  `json:"size"`
	User              string                 `json:"user"`
}
