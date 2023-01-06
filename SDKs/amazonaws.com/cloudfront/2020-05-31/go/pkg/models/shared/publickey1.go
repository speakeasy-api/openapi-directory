package shared

import (
	"time"
)

// PublicKey1
// A public key that you can use with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">signed URLs and signed cookies</a>, or with <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/field-level-encryption.html">field-level encryption</a>.
type PublicKey1 struct {
	CreatedTime     time.Time
	ID              string
	PublicKeyConfig PublicKeyConfig
}
