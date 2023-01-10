package shared

// CertificateMessage
// Data returned by the <b>DescribeCertificates</b> action.
type CertificateMessage struct {
	Certificates []CertificateList
	Marker       *string
}
