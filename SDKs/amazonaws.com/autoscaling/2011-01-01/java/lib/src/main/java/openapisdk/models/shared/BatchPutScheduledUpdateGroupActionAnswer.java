package openapisdk.models.shared;



public class BatchPutScheduledUpdateGroupActionAnswer {
    public FailedScheduledUpdateGroupActionRequest[] failedScheduledUpdateGroupActions;
    public BatchPutScheduledUpdateGroupActionAnswer withFailedScheduledUpdateGroupActions(FailedScheduledUpdateGroupActionRequest[] failedScheduledUpdateGroupActions) {
        this.failedScheduledUpdateGroupActions = failedScheduledUpdateGroupActions;
        return this;
    }
}