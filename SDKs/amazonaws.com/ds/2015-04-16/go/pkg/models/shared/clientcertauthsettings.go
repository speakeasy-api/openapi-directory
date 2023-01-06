package shared

// ClientCertAuthSettings
// Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations.
type ClientCertAuthSettings struct {
	OCSPURL *string `json:"OCSPUrl,omitempty"`
}
