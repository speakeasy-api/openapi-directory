package shared

// HsmClientCertificateList
// Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
type HsmClientCertificateList struct {
	HsmClientCertificateIdentifier *string
	HsmClientCertificatePublicKey  *string
	Tags                           []TagList
}
