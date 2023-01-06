package shared

type SetIPAddressTypeRequest struct {
	IPAddressType IPAddressTypeEnum      `json:"ipAddressType"`
	ResourceName  map[string]interface{} `json:"resourceName"`
	ResourceType  ResourceTypeEnum       `json:"resourceType"`
}
