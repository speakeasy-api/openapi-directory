package shared

type CertificateMessage struct {
	Certificates []CertificateList
	Marker       *string
}
