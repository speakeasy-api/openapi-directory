package shared

// IdentityMailFromDomainAttributes
// Represents the custom MAIL FROM domain attributes of a verified identity (email address or domain).
type IdentityMailFromDomainAttributes struct {
	BehaviorOnMXFailure  BehaviorOnMxFailureEnum
	MailFromDomain       string
	MailFromDomainStatus CustomMailFromStatusEnum
}
