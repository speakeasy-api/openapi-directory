package openapisdk.models.operations;



public class ListExecutionsResponse {
    public String contentType;
    public ListExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArn;
    public ListExecutionsResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Object invalidToken;
    public ListExecutionsResponse withInvalidToken(Object invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.ListExecutionsOutput listExecutionsOutput;
    public ListExecutionsResponse withListExecutionsOutput(openapisdk.models.shared.ListExecutionsOutput listExecutionsOutput) {
        this.listExecutionsOutput = listExecutionsOutput;
        return this;
    }
    public Object stateMachineDoesNotExist;
    public ListExecutionsResponse withStateMachineDoesNotExist(Object stateMachineDoesNotExist) {
        this.stateMachineDoesNotExist = stateMachineDoesNotExist;
        return this;
    }
    public Object stateMachineTypeNotSupported;
    public ListExecutionsResponse withStateMachineTypeNotSupported(Object stateMachineTypeNotSupported) {
        this.stateMachineTypeNotSupported = stateMachineTypeNotSupported;
        return this;
    }
    public Long statusCode;
    public ListExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}