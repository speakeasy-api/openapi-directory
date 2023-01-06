package shared

type BillingPeriodList struct {
	BillingPeriods []BillingPeriod        `json:"billingPeriods"`
	Links          BillingPeriodListLinks `json:"links"`
}
