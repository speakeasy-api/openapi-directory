package openapisdk.models.operations;



public class InitiateJobResponse {
    public String contentType;
    public InitiateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> initiateJobOutput;
    public InitiateJobResponse withInitiateJobOutput(java.util.Map<String, Object> initiateJobOutput) {
        this.initiateJobOutput = initiateJobOutput;
        return this;
    }
    public Object insufficientCapacityException;
    public InitiateJobResponse withInsufficientCapacityException(Object insufficientCapacityException) {
        this.insufficientCapacityException = insufficientCapacityException;
        return this;
    }
    public Object invalidParameterValueException;
    public InitiateJobResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public InitiateJobResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object policyEnforcedException;
    public InitiateJobResponse withPolicyEnforcedException(Object policyEnforcedException) {
        this.policyEnforcedException = policyEnforcedException;
        return this;
    }
    public Object resourceNotFoundException;
    public InitiateJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public InitiateJobResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public InitiateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}