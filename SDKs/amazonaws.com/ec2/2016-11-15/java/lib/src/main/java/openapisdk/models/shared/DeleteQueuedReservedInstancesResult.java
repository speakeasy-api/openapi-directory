package openapisdk.models.shared;



public class DeleteQueuedReservedInstancesResult {
    public java.util.Map<String, Object> failedQueuedPurchaseDeletions;
    public DeleteQueuedReservedInstancesResult withFailedQueuedPurchaseDeletions(java.util.Map<String, Object> failedQueuedPurchaseDeletions) {
        this.failedQueuedPurchaseDeletions = failedQueuedPurchaseDeletions;
        return this;
    }
    public java.util.Map<String, Object> successfulQueuedPurchaseDeletions;
    public DeleteQueuedReservedInstancesResult withSuccessfulQueuedPurchaseDeletions(java.util.Map<String, Object> successfulQueuedPurchaseDeletions) {
        this.successfulQueuedPurchaseDeletions = successfulQueuedPurchaseDeletions;
        return this;
    }
}