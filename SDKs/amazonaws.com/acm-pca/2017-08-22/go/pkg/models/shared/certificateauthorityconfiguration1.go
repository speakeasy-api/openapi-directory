package shared

// CertificateAuthorityConfiguration1
// Contains configuration information for your private certificate authority (CA). This includes information about the class of public key algorithm and the key pair that your private CA creates when it issues a certificate. It also includes the signature algorithm that it uses when issuing certificates, and its X.500 distinguished name. You must specify this information when you call the <a href="https://docs.aws.amazon.com/acm-pca/latest/APIReference/API_CreateCertificateAuthority.html">CreateCertificateAuthority</a> action.
type CertificateAuthorityConfiguration1 struct {
	CsrExtensions    *CsrExtensions1      `json:"CsrExtensions,omitempty"`
	KeyAlgorithm     KeyAlgorithmEnum     `json:"KeyAlgorithm"`
	SigningAlgorithm SigningAlgorithmEnum `json:"SigningAlgorithm"`
	Subject          Asn1Subject          `json:"Subject"`
}
