package openapisdk.models.operations;



public class GetCsvHeaderResponse {
    public String contentType;
    public GetCsvHeaderResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetCsvHeaderResponse getCSVHeaderResponse;
    public GetCsvHeaderResponse withGetCsvHeaderResponse(openapisdk.models.shared.GetCsvHeaderResponse getCSVHeaderResponse) {
        this.getCSVHeaderResponse = getCSVHeaderResponse;
        return this;
    }
    public Object internalErrorException;
    public GetCsvHeaderResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetCsvHeaderResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetCsvHeaderResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetCsvHeaderResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetCsvHeaderResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetCsvHeaderResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}