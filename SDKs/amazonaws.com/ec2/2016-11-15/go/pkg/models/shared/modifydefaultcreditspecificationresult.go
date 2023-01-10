package shared

// ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
// The default credit option for CPU usage of the instance family.
type ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification struct {
	CPUCredits     map[string]interface{}
	InstanceFamily map[string]interface{}
}

type ModifyDefaultCreditSpecificationResult struct {
	InstanceFamilyCreditSpecification *ModifyDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
}
