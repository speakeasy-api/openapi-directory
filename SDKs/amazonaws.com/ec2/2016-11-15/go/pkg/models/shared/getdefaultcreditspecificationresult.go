package shared

// GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
// The default credit option for CPU usage of the instance family.
type GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification struct {
	CPUCredits     map[string]interface{}
	InstanceFamily map[string]interface{}
}

type GetDefaultCreditSpecificationResult struct {
	InstanceFamilyCreditSpecification *GetDefaultCreditSpecificationResultInstanceFamilyCreditSpecification
}
