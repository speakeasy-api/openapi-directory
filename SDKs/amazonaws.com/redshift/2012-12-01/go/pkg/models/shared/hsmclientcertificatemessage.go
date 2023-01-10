package shared

// HsmClientCertificateMessage
// <p/>
type HsmClientCertificateMessage struct {
	HsmClientCertificates []HsmClientCertificateList
	Marker                *string
}
