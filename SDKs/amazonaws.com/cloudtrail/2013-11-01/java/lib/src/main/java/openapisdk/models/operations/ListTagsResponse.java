package openapisdk.models.operations;



public class ListTagsResponse {
    public Object cloudTrailARNInvalidException;
    public ListTagsResponse withCloudTrailArnInvalidException(Object cloudTrailARNInvalidException) {
        this.cloudTrailARNInvalidException = cloudTrailARNInvalidException;
        return this;
    }
    public String contentType;
    public ListTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidTokenException;
    public ListTagsResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object invalidTrailNameException;
    public ListTagsResponse withInvalidTrailNameException(Object invalidTrailNameException) {
        this.invalidTrailNameException = invalidTrailNameException;
        return this;
    }
    public openapisdk.models.shared.ListTagsResponse listTagsResponse;
    public ListTagsResponse withListTagsResponse(openapisdk.models.shared.ListTagsResponse listTagsResponse) {
        this.listTagsResponse = listTagsResponse;
        return this;
    }
    public Object operationNotPermittedException;
    public ListTagsResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceTypeNotSupportedException;
    public ListTagsResponse withResourceTypeNotSupportedException(Object resourceTypeNotSupportedException) {
        this.resourceTypeNotSupportedException = resourceTypeNotSupportedException;
        return this;
    }
    public Long statusCode;
    public ListTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ListTagsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}