package openapisdk.models.shared;



public class BatchDeleteScheduledActionAnswer {
    public FailedScheduledUpdateGroupActionRequest[] failedScheduledActions;
    public BatchDeleteScheduledActionAnswer withFailedScheduledActions(FailedScheduledUpdateGroupActionRequest[] failedScheduledActions) {
        this.failedScheduledActions = failedScheduledActions;
        return this;
    }
}