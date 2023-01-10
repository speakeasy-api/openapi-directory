package shared

import (
	"time"
)

// CertificateList
// A CA certificate for an Amazon Web Services account.
type CertificateList struct {
	CertificateArn            *string
	CertificateIdentifier     *string
	CertificateType           *string
	CustomerOverride          *bool
	CustomerOverrideValidTill *time.Time
	Thumbprint                *string
	ValidFrom                 *time.Time
	ValidTill                 *time.Time
}
