package shared

// DbInstanceRoles
// Describes an Amazon Web Services Identity and Access Management (IAM) role that is associated with a DB instance.
type DbInstanceRoles struct {
	FeatureName *string
	RoleArn     *string
	Status      *string
}
