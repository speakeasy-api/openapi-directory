package shared

// KeyPair
// Describes a key pair.
type KeyPair struct {
	KeyFingerprint map[string]interface{}
	KeyMaterial    map[string]interface{}
	KeyName        map[string]interface{}
	KeyPairID      map[string]interface{}
	Tags           map[string]interface{}
}
