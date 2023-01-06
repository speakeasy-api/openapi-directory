package shared

type ListCertificateAuthoritiesResponse struct {
	CertificateAuthorities []CertificateAuthority1 `json:"CertificateAuthorities,omitempty"`
	NextToken              *string                 `json:"NextToken,omitempty"`
}
