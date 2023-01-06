package shared

import (
	"time"
)

// VirtualMfaDevice
// Contains information about a virtual MFA device.
type VirtualMfaDevice struct {
	Base32StringSeed *string
	EnableDate       *time.Time
	QRCodePNG        *string
	SerialNumber     string
	Tags             []Tag
	User             *User
}
