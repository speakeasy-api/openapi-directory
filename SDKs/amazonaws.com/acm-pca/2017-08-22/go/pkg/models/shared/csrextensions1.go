package shared

// CsrExtensions1
// Describes the certificate extensions to be added to the certificate signing request (CSR).
type CsrExtensions1 struct {
	KeyUsage                 *KeyUsage            `json:"KeyUsage,omitempty"`
	SubjectInformationAccess []AccessDescription1 `json:"SubjectInformationAccess,omitempty"`
}
