package shared

// ModifyAddressAttributeResultAddressPtrRecordUpdate
// The updated PTR record for the IP address.
type ModifyAddressAttributeResultAddressPtrRecordUpdate struct {
	Reason map[string]interface{}
	Status map[string]interface{}
	Value  map[string]interface{}
}

// ModifyAddressAttributeResultAddress
// Information about the Elastic IP address.
type ModifyAddressAttributeResultAddress struct {
	AllocationID    map[string]interface{}
	PtrRecord       map[string]interface{}
	PtrRecordUpdate *ModifyAddressAttributeResultAddressPtrRecordUpdate
	PublicIP        map[string]interface{}
}

type ModifyAddressAttributeResult struct {
	Address *ModifyAddressAttributeResultAddress
}
