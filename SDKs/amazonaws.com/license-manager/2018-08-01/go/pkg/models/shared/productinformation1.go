package shared

// ProductInformation1
// Describes product information for a license configuration.
type ProductInformation1 struct {
	ProductInformationFilterList map[string]interface{} `json:"ProductInformationFilterList"`
	ResourceType                 string                 `json:"ResourceType"`
}
