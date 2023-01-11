package openapisdk.models.shared;



public class CancelImportTaskResult {
    public java.util.Map<String, Object> importTaskId;
    public CancelImportTaskResult withImportTaskId(java.util.Map<String, Object> importTaskId) {
        this.importTaskId = importTaskId;
        return this;
    }
    public java.util.Map<String, Object> previousState;
    public CancelImportTaskResult withPreviousState(java.util.Map<String, Object> previousState) {
        this.previousState = previousState;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CancelImportTaskResult withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
}