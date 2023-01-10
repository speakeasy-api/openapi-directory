package shared

// ExportClientVpnClientCertificateRevocationListResultStatus
// The current state of the client certificate revocation list.
type ExportClientVpnClientCertificateRevocationListResultStatus struct {
	Code    map[string]interface{}
	Message map[string]interface{}
}

type ExportClientVpnClientCertificateRevocationListResult struct {
	CertificateRevocationList map[string]interface{}
	Status                    *ExportClientVpnClientCertificateRevocationListResultStatus
}
