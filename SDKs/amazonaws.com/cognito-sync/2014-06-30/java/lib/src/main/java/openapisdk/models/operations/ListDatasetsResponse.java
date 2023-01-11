package openapisdk.models.operations;



public class ListDatasetsResponse {
    public String contentType;
    public ListDatasetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListDatasetsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public ListDatasetsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListDatasetsResponse listDatasetsResponse;
    public ListDatasetsResponse withListDatasetsResponse(openapisdk.models.shared.ListDatasetsResponse listDatasetsResponse) {
        this.listDatasetsResponse = listDatasetsResponse;
        return this;
    }
    public Object notAuthorizedException;
    public ListDatasetsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Long statusCode;
    public ListDatasetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListDatasetsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}