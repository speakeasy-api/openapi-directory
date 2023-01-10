package shared

// DomainMembershipList
// An Active Directory Domain membership record associated with the DB instance or cluster.
type DomainMembershipList struct {
	Domain      *string
	FQDN        *string
	IAMRoleName *string
	Status      *string
}
