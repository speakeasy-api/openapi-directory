package openapisdk.models.operations;



public class GetTerminologyResponse {
    public String contentType;
    public GetTerminologyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetTerminologyResponse getTerminologyResponse;
    public GetTerminologyResponse withGetTerminologyResponse(openapisdk.models.shared.GetTerminologyResponse getTerminologyResponse) {
        this.getTerminologyResponse = getTerminologyResponse;
        return this;
    }
    public Object internalServerException;
    public GetTerminologyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetTerminologyResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetTerminologyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetTerminologyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetTerminologyResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}