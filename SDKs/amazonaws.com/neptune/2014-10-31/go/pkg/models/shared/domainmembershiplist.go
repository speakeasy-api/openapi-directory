package shared

// DomainMembershipList
// An Active Directory Domain membership record associated with a DB instance.
type DomainMembershipList struct {
	Domain      *string
	FQDN        *string
	IAMRoleName *string
	Status      *string
}
