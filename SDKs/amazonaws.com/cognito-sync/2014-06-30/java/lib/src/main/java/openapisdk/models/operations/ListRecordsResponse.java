package openapisdk.models.operations;



public class ListRecordsResponse {
    public String contentType;
    public ListRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListRecordsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListRecordsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListRecordsResponse listRecordsResponse;
    public ListRecordsResponse withListRecordsResponse(openapisdk.models.shared.ListRecordsResponse listRecordsResponse) {
        this.listRecordsResponse = listRecordsResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListRecordsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Long statusCode;
    public ListRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListRecordsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}