package shared

// AccountsWithRestoreAccessList
// Describes an Amazon Web Services account authorized to restore a snapshot.
type AccountsWithRestoreAccessList struct {
	AccountAlias *string
	AccountID    *string
}
