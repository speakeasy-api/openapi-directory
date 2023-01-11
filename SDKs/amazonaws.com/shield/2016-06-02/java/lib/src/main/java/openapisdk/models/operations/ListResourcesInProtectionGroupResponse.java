package openapisdk.models.operations;



public class ListResourcesInProtectionGroupResponse {
    public String contentType;
    public ListResourcesInProtectionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListResourcesInProtectionGroupResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListResourcesInProtectionGroupResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public openapisdk.models.shared.ListResourcesInProtectionGroupResponse listResourcesInProtectionGroupResponse;
    public ListResourcesInProtectionGroupResponse withListResourcesInProtectionGroupResponse(openapisdk.models.shared.ListResourcesInProtectionGroupResponse listResourcesInProtectionGroupResponse) {
        this.listResourcesInProtectionGroupResponse = listResourcesInProtectionGroupResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListResourcesInProtectionGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListResourcesInProtectionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}