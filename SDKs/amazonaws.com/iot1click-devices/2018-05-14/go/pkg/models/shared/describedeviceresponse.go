package shared

// DescribeDeviceResponseDeviceDescription
// Device details.
type DescribeDeviceResponseDeviceDescription struct {
	Arn           map[string]interface{} `json:"Arn,omitempty"`
	Attributes    map[string]string      `json:"Attributes,omitempty"`
	DeviceID      map[string]interface{} `json:"DeviceId,omitempty"`
	Enabled       map[string]interface{} `json:"Enabled,omitempty"`
	RemainingLife map[string]interface{} `json:"RemainingLife,omitempty"`
	Tags          map[string]string      `json:"Tags,omitempty"`
	Type          map[string]interface{} `json:"Type,omitempty"`
}

type DescribeDeviceResponse struct {
	DeviceDescription *DescribeDeviceResponseDeviceDescription `json:"DeviceDescription,omitempty"`
}
