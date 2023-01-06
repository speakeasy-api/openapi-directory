package shared

// CustomDomain1
// Describes a custom domain that's associated with an AWS App Runner service.
type CustomDomain1 struct {
	CertificateValidationRecords []CertificateValidationRecord1    `json:"CertificateValidationRecords,omitempty"`
	DomainName                   string                            `json:"DomainName"`
	EnableWWWSubdomain           bool                              `json:"EnableWWWSubdomain"`
	Status                       CustomDomainAssociationStatusEnum `json:"Status"`
}
