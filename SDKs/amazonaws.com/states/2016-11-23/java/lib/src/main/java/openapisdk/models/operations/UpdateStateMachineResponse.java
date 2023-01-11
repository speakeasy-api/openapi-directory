package openapisdk.models.operations;



public class UpdateStateMachineResponse {
    public String contentType;
    public UpdateStateMachineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArn;
    public UpdateStateMachineResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object invalidDefinition;
    public UpdateStateMachineResponse withInvalidDefinition(Object invalidDefinition) {
        this.invalidDefinition = invalidDefinition;
        return this;
    }
    public Object invalidLoggingConfiguration;
    public UpdateStateMachineResponse withInvalidLoggingConfiguration(Object invalidLoggingConfiguration) {
        this.invalidLoggingConfiguration = invalidLoggingConfiguration;
        return this;
    }
    public Object invalidTracingConfiguration;
    public UpdateStateMachineResponse withInvalidTracingConfiguration(Object invalidTracingConfiguration) {
        this.invalidTracingConfiguration = invalidTracingConfiguration;
        return this;
    }
    public Object missingRequiredParameter;
    public UpdateStateMachineResponse withMissingRequiredParameter(Object missingRequiredParameter) {
        this.missingRequiredParameter = missingRequiredParameter;
        return this;
    }
    public Object stateMachineDeleting;
    public UpdateStateMachineResponse withStateMachineDeleting(Object stateMachineDeleting) {
        this.stateMachineDeleting = stateMachineDeleting;
        return this;
    }
    public Object stateMachineDoesNotExist;
    public UpdateStateMachineResponse withStateMachineDoesNotExist(Object stateMachineDoesNotExist) {
        this.stateMachineDoesNotExist = stateMachineDoesNotExist;
        return this;
    }
    public Long statusCode;
    public UpdateStateMachineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateStateMachineOutput updateStateMachineOutput;
    public UpdateStateMachineResponse withUpdateStateMachineOutput(openapisdk.models.shared.UpdateStateMachineOutput updateStateMachineOutput) {
        this.updateStateMachineOutput = updateStateMachineOutput;
        return this;
    }
}