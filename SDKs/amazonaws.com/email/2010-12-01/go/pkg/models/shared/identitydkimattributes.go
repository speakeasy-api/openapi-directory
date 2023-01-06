package shared

type IdentityDkimAttributes struct {
	DkimEnabled            *bool
	DkimTokens             []string
	DkimVerificationStatus *VerificationStatusEnum
}
