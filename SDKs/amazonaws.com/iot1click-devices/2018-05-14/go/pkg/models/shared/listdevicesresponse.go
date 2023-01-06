package shared

type ListDevicesResponse struct {
	Devices   map[string]interface{} `json:"Devices,omitempty"`
	NextToken map[string]interface{} `json:"NextToken,omitempty"`
}
