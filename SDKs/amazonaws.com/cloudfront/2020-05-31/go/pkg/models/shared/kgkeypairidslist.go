package shared

// KgKeyPairIdsList
// A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
type KgKeyPairIdsList struct {
	KeyGroupID *string
	KeyPairIds *KeyPairIds
}
