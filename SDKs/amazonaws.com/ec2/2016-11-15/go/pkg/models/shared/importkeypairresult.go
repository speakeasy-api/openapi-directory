package shared

type ImportKeyPairResult struct {
	KeyFingerprint map[string]interface{}
	KeyName        map[string]interface{}
	KeyPairID      map[string]interface{}
	Tags           map[string]interface{}
}
