package shared

// HsmClientCertificateMessage
// <p/>
type HsmClientCertificateMessage struct {
	HsmClientCertificates []map[string]interface{}
	Marker                *string
}
