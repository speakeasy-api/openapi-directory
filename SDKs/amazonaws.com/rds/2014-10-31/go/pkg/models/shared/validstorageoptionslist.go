package shared

// ValidStorageOptionsList
// Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action.
type ValidStorageOptionsList struct {
	IopsToStorageRatio         []DoubleRangeList
	ProvisionedIops            []RangeList
	StorageSize                []RangeList
	StorageType                *string
	SupportsStorageAutoscaling *bool
}
