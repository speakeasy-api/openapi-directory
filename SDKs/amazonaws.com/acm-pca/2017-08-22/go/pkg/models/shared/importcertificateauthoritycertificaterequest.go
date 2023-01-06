package shared

type ImportCertificateAuthorityCertificateRequest struct {
	Certificate             map[string]interface{} `json:"Certificate"`
	CertificateAuthorityArn string                 `json:"CertificateAuthorityArn"`
	CertificateChain        *string                `json:"CertificateChain,omitempty"`
}
