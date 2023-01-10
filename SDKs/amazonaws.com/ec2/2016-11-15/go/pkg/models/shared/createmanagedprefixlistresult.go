package shared

// CreateManagedPrefixListResultPrefixList
// Information about the prefix list.
type CreateManagedPrefixListResultPrefixList struct {
	AddressFamily  map[string]interface{}
	MaxEntries     map[string]interface{}
	OwnerID        map[string]interface{}
	PrefixListArn  map[string]interface{}
	PrefixListID   map[string]interface{}
	PrefixListName map[string]interface{}
	State          map[string]interface{}
	StateMessage   map[string]interface{}
	Tags           map[string]interface{}
	Version        map[string]interface{}
}

type CreateManagedPrefixListResult struct {
	PrefixList *CreateManagedPrefixListResultPrefixList
}
