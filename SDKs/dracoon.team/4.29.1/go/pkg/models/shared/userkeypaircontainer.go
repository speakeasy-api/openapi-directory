package shared

// UserKeyPairContainer
// Key pair container
type UserKeyPairContainer struct {
	PrivateKeyContainer PrivateKeyContainer `json:"privateKeyContainer"`
	PublicKeyContainer  PublicKeyContainer  `json:"publicKeyContainer"`
}

// UserKeyPairContainerOutput
// Key pair container
type UserKeyPairContainerOutput struct {
	PrivateKeyContainer PrivateKeyContainerOutput `json:"privateKeyContainer"`
	PublicKeyContainer  PublicKeyContainerOutput  `json:"publicKeyContainer"`
}
