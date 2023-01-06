package shared

type LicenseSourcesEnum string

const (
	LicenseSourcesEnumOrder        LicenseSourcesEnum = "order"
	LicenseSourcesEnumTrial        LicenseSourcesEnum = "trial"
	LicenseSourcesEnumVoucher      LicenseSourcesEnum = "voucher"
	LicenseSourcesEnumDistributor  LicenseSourcesEnum = "distributor"
	LicenseSourcesEnumSubscription LicenseSourcesEnum = "subscription"
	LicenseSourcesEnumAppStore     LicenseSourcesEnum = "appStore"
)
