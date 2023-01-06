package shared

type IdentityMailFromDomainAttributes struct {
	BehaviorOnMXFailure  *BehaviorOnMxFailureEnum
	MailFromDomain       *string
	MailFromDomainStatus *CustomMailFromStatusEnum
}
