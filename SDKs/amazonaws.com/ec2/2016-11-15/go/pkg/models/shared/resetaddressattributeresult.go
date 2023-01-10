package shared

// ResetAddressAttributeResultAddressPtrRecordUpdate
// The updated PTR record for the IP address.
type ResetAddressAttributeResultAddressPtrRecordUpdate struct {
	Reason map[string]interface{}
	Status map[string]interface{}
	Value  map[string]interface{}
}

// ResetAddressAttributeResultAddress
// Information about the IP address.
type ResetAddressAttributeResultAddress struct {
	AllocationID    map[string]interface{}
	PtrRecord       map[string]interface{}
	PtrRecordUpdate *ResetAddressAttributeResultAddressPtrRecordUpdate
	PublicIP        map[string]interface{}
}

type ResetAddressAttributeResult struct {
	Address *ResetAddressAttributeResultAddress
}
