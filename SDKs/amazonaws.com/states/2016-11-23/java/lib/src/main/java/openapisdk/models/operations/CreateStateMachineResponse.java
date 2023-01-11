package openapisdk.models.operations;



public class CreateStateMachineResponse {
    public String contentType;
    public CreateStateMachineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStateMachineOutput createStateMachineOutput;
    public CreateStateMachineResponse withCreateStateMachineOutput(openapisdk.models.shared.CreateStateMachineOutput createStateMachineOutput) {
        this.createStateMachineOutput = createStateMachineOutput;
        return this;
    }
    public Object invalidArn;
    public CreateStateMachineResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object invalidDefinition;
    public CreateStateMachineResponse withInvalidDefinition(Object invalidDefinition) {
        this.invalidDefinition = invalidDefinition;
        return this;
    }
    public Object invalidLoggingConfiguration;
    public CreateStateMachineResponse withInvalidLoggingConfiguration(Object invalidLoggingConfiguration) {
        this.invalidLoggingConfiguration = invalidLoggingConfiguration;
        return this;
    }
    public Object invalidName;
    public CreateStateMachineResponse withInvalidName(Object invalidName) {
        this.invalidName = invalidName;
        return this;
    }
    public Object invalidTracingConfiguration;
    public CreateStateMachineResponse withInvalidTracingConfiguration(Object invalidTracingConfiguration) {
        this.invalidTracingConfiguration = invalidTracingConfiguration;
        return this;
    }
    public Object stateMachineAlreadyExists;
    public CreateStateMachineResponse withStateMachineAlreadyExists(Object stateMachineAlreadyExists) {
        this.stateMachineAlreadyExists = stateMachineAlreadyExists;
        return this;
    }
    public Object stateMachineDeleting;
    public CreateStateMachineResponse withStateMachineDeleting(Object stateMachineDeleting) {
        this.stateMachineDeleting = stateMachineDeleting;
        return this;
    }
    public Object stateMachineLimitExceeded;
    public CreateStateMachineResponse withStateMachineLimitExceeded(Object stateMachineLimitExceeded) {
        this.stateMachineLimitExceeded = stateMachineLimitExceeded;
        return this;
    }
    public Object stateMachineTypeNotSupported;
    public CreateStateMachineResponse withStateMachineTypeNotSupported(Object stateMachineTypeNotSupported) {
        this.stateMachineTypeNotSupported = stateMachineTypeNotSupported;
        return this;
    }
    public Long statusCode;
    public CreateStateMachineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTags;
    public CreateStateMachineResponse withTooManyTags(Object tooManyTags) {
        this.tooManyTags = tooManyTags;
        return this;
    }
}