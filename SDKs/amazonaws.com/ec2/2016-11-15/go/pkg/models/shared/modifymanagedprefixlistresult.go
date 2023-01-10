package shared

// ModifyManagedPrefixListResultPrefixList
// Information about the prefix list.
type ModifyManagedPrefixListResultPrefixList struct {
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

type ModifyManagedPrefixListResult struct {
	PrefixList *ModifyManagedPrefixListResultPrefixList
}
