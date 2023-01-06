package shared

// ListCustomVerificationEmailTemplatesResponse1
// A paginated list of custom verification email templates.
type ListCustomVerificationEmailTemplatesResponse1 struct {
	CustomVerificationEmailTemplates []CustomVerificationEmailTemplate1
	NextToken                        *string
}
