package shared

type CertificateMessage struct {
	Certificates []map[string]interface{}
	Marker       *string
}
