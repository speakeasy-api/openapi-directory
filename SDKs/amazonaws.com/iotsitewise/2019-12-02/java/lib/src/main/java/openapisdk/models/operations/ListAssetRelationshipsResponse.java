package openapisdk.models.operations;



public class ListAssetRelationshipsResponse {
    public String contentType;
    public ListAssetRelationshipsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAssetRelationshipsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAssetRelationshipsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAssetRelationshipsResponse listAssetRelationshipsResponse;
    public ListAssetRelationshipsResponse withListAssetRelationshipsResponse(openapisdk.models.shared.ListAssetRelationshipsResponse listAssetRelationshipsResponse) {
        this.listAssetRelationshipsResponse = listAssetRelationshipsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAssetRelationshipsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAssetRelationshipsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAssetRelationshipsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}