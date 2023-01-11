package openapisdk.models.operations;



public class GetJobOutputResponse {
    public String contentType;
    public GetJobOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJobOutputOutput getJobOutputOutput;
    public GetJobOutputResponse withGetJobOutputOutput(openapisdk.models.shared.GetJobOutputOutput getJobOutputOutput) {
        this.getJobOutputOutput = getJobOutputOutput;
        return this;
    }
    public Object invalidParameterValueException;
    public GetJobOutputResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingParameterValueException;
    public GetJobOutputResponse withMissingParameterValueException(Object missingParameterValueException) {
        this.missingParameterValueException = missingParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetJobOutputResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetJobOutputResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetJobOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}