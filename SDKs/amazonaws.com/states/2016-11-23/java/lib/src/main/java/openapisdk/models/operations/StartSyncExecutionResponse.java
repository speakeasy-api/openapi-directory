package openapisdk.models.operations;



public class StartSyncExecutionResponse {
    public String contentType;
    public StartSyncExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArn;
    public StartSyncExecutionResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object invalidExecutionInput;
    public StartSyncExecutionResponse withInvalidExecutionInput(Object invalidExecutionInput) {
        this.invalidExecutionInput = invalidExecutionInput;
        return this;
    }
    public Object invalidName;
    public StartSyncExecutionResponse withInvalidName(Object invalidName) {
        this.invalidName = invalidName;
        return this;
    }
    public openapisdk.models.shared.StartSyncExecutionOutput startSyncExecutionOutput;
    public StartSyncExecutionResponse withStartSyncExecutionOutput(openapisdk.models.shared.StartSyncExecutionOutput startSyncExecutionOutput) {
        this.startSyncExecutionOutput = startSyncExecutionOutput;
        return this;
    }
    public Object stateMachineDeleting;
    public StartSyncExecutionResponse withStateMachineDeleting(Object stateMachineDeleting) {
        this.stateMachineDeleting = stateMachineDeleting;
        return this;
    }
    public Object stateMachineDoesNotExist;
    public StartSyncExecutionResponse withStateMachineDoesNotExist(Object stateMachineDoesNotExist) {
        this.stateMachineDoesNotExist = stateMachineDoesNotExist;
        return this;
    }
    public Object stateMachineTypeNotSupported;
    public StartSyncExecutionResponse withStateMachineTypeNotSupported(Object stateMachineTypeNotSupported) {
        this.stateMachineTypeNotSupported = stateMachineTypeNotSupported;
        return this;
    }
    public Long statusCode;
    public StartSyncExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}