package openapisdk.models.operations;



public class GetBulkPublishDetailsResponse {
    public String contentType;
    public GetBulkPublishDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBulkPublishDetailsResponse getBulkPublishDetailsResponse;
    public GetBulkPublishDetailsResponse withGetBulkPublishDetailsResponse(openapisdk.models.shared.GetBulkPublishDetailsResponse getBulkPublishDetailsResponse) {
        this.getBulkPublishDetailsResponse = getBulkPublishDetailsResponse;
        return this;
    }
    public Object internalErrorException;
    public GetBulkPublishDetailsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public GetBulkPublishDetailsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public GetBulkPublishDetailsResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetBulkPublishDetailsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetBulkPublishDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}