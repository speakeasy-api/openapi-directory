package shared

// DomainNameConfiguration
// The domain name configuration.
type DomainNameConfiguration struct {
	APIGatewayDomainName                map[string]interface{} `json:"ApiGatewayDomainName,omitempty"`
	CertificateArn                      map[string]interface{} `json:"CertificateArn,omitempty"`
	CertificateName                     map[string]interface{} `json:"CertificateName,omitempty"`
	CertificateUploadDate               map[string]interface{} `json:"CertificateUploadDate,omitempty"`
	DomainNameStatus                    map[string]interface{} `json:"DomainNameStatus,omitempty"`
	DomainNameStatusMessage             map[string]interface{} `json:"DomainNameStatusMessage,omitempty"`
	EndpointType                        map[string]interface{} `json:"EndpointType,omitempty"`
	HostedZoneID                        map[string]interface{} `json:"HostedZoneId,omitempty"`
	OwnershipVerificationCertificateArn map[string]interface{} `json:"OwnershipVerificationCertificateArn,omitempty"`
	SecurityPolicy                      map[string]interface{} `json:"SecurityPolicy,omitempty"`
}
