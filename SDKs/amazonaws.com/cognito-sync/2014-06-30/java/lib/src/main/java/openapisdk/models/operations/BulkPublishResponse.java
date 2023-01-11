package openapisdk.models.operations;



public class BulkPublishResponse {
    public Object alreadyStreamedException;
    public BulkPublishResponse withAlreadyStreamedException(Object alreadyStreamedException) {
        this.alreadyStreamedException = alreadyStreamedException;
        return this;
    }
    public openapisdk.models.shared.BulkPublishResponse bulkPublishResponse;
    public BulkPublishResponse withBulkPublishResponse(openapisdk.models.shared.BulkPublishResponse bulkPublishResponse) {
        this.bulkPublishResponse = bulkPublishResponse;
        return this;
    }
    public String contentType;
    public BulkPublishResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequestException;
    public BulkPublishResponse withDuplicateRequestException(Object duplicateRequestException) {
        this.duplicateRequestException = duplicateRequestException;
        return this;
    }
    public Object internalErrorException;
    public BulkPublishResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public BulkPublishResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object notAuthorizedException;
    public BulkPublishResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public BulkPublishResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BulkPublishResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}