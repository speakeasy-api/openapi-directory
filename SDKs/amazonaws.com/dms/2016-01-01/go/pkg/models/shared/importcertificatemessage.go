package shared

type ImportCertificateMessage struct {
	CertificateIdentifier map[string]interface{} `json:"CertificateIdentifier"`
	CertificatePem        *string                `json:"CertificatePem,omitempty"`
	CertificateWallet     *string                `json:"CertificateWallet,omitempty"`
	Tags                  []Tag                  `json:"Tags,omitempty"`
}
