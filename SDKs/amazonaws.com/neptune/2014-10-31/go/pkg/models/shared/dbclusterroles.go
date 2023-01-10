package shared

// DbClusterRoles
// Describes an Amazon Identity and Access Management (IAM) role that is associated with a DB cluster.
type DbClusterRoles struct {
	FeatureName *string
	RoleArn     *string
	Status      *string
}
