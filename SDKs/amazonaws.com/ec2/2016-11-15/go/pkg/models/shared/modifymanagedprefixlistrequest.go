// Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.

package shared

type ModifyManagedPrefixListRequest struct {
	AddEntries     []AddPrefixListEntry
	CurrentVersion *int64
	DryRun         *bool
	MaxEntries     *int64
	PrefixListID   string
	PrefixListName *string
	RemoveEntries  []RemovePrefixListEntry
}
