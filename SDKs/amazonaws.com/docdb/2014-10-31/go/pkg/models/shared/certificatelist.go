package shared

import (
	"time"
)

// CertificateList
// A certificate authority (CA) certificate for an account.
type CertificateList struct {
	CertificateArn        *string
	CertificateIdentifier *string
	CertificateType       *string
	Thumbprint            *string
	ValidFrom             *time.Time
	ValidTill             *time.Time
}
