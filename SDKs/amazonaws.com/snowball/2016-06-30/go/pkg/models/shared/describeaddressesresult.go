package shared

type DescribeAddressesResult struct {
	Addresses []Address1 `json:"Addresses,omitempty"`
	NextToken *string    `json:"NextToken,omitempty"`
}
