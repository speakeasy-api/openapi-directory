package shared

type DeleteQueuedReservedInstancesResult struct {
	FailedQueuedPurchaseDeletions     map[string]interface{}
	SuccessfulQueuedPurchaseDeletions map[string]interface{}
}
