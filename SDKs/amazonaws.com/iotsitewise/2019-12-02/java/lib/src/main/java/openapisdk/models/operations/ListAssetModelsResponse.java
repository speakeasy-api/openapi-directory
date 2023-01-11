package openapisdk.models.operations;



public class ListAssetModelsResponse {
    public String contentType;
    public ListAssetModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAssetModelsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAssetModelsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAssetModelsResponse listAssetModelsResponse;
    public ListAssetModelsResponse withListAssetModelsResponse(openapisdk.models.shared.ListAssetModelsResponse listAssetModelsResponse) {
        this.listAssetModelsResponse = listAssetModelsResponse;
        return this;
    }
    public Long statusCode;
    public ListAssetModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAssetModelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}