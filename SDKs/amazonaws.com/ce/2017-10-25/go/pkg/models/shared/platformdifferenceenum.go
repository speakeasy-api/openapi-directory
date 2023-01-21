package shared

type PlatformDifferenceEnum string

const (
	PlatformDifferenceEnumHypervisor                PlatformDifferenceEnum = "HYPERVISOR"
	PlatformDifferenceEnumNetworkInterface          PlatformDifferenceEnum = "NETWORK_INTERFACE"
	PlatformDifferenceEnumStorageInterface          PlatformDifferenceEnum = "STORAGE_INTERFACE"
	PlatformDifferenceEnumInstanceStoreAvailability PlatformDifferenceEnum = "INSTANCE_STORE_AVAILABILITY"
	PlatformDifferenceEnumVirtualizationType        PlatformDifferenceEnum = "VIRTUALIZATION_TYPE"
)
