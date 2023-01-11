package openapisdk.models.operations;



public class StartExecutionResponse {
    public String contentType;
    public StartExecutionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object executionAlreadyExists;
    public StartExecutionResponse withExecutionAlreadyExists(Object executionAlreadyExists) {
        this.executionAlreadyExists = executionAlreadyExists;
        return this;
    }
    public Object executionLimitExceeded;
    public StartExecutionResponse withExecutionLimitExceeded(Object executionLimitExceeded) {
        this.executionLimitExceeded = executionLimitExceeded;
        return this;
    }
    public Object invalidArn;
    public StartExecutionResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object invalidExecutionInput;
    public StartExecutionResponse withInvalidExecutionInput(Object invalidExecutionInput) {
        this.invalidExecutionInput = invalidExecutionInput;
        return this;
    }
    public Object invalidName;
    public StartExecutionResponse withInvalidName(Object invalidName) {
        this.invalidName = invalidName;
        return this;
    }
    public openapisdk.models.shared.StartExecutionOutput startExecutionOutput;
    public StartExecutionResponse withStartExecutionOutput(openapisdk.models.shared.StartExecutionOutput startExecutionOutput) {
        this.startExecutionOutput = startExecutionOutput;
        return this;
    }
    public Object stateMachineDeleting;
    public StartExecutionResponse withStateMachineDeleting(Object stateMachineDeleting) {
        this.stateMachineDeleting = stateMachineDeleting;
        return this;
    }
    public Object stateMachineDoesNotExist;
    public StartExecutionResponse withStateMachineDoesNotExist(Object stateMachineDoesNotExist) {
        this.stateMachineDoesNotExist = stateMachineDoesNotExist;
        return this;
    }
    public Long statusCode;
    public StartExecutionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}