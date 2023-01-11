package openapisdk.models.operations;



public class ListAliasesResponse {
    public String contentType;
    public ListAliasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public ListAliasesResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ListAliasesResponse listAliasesResponse;
    public ListAliasesResponse withListAliasesResponse(openapisdk.models.shared.ListAliasesResponse listAliasesResponse) {
        this.listAliasesResponse = listAliasesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAliasesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public ListAliasesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListAliasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListAliasesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}