package openapisdk.models.operations;



public class DeleteAttributesResponse {
    public Object clusterNotFoundException;
    public DeleteAttributesResponse withClusterNotFoundException(Object clusterNotFoundException) {
        this.clusterNotFoundException = clusterNotFoundException;
        return this;
    }
    public String contentType;
    public DeleteAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAttributesResponse deleteAttributesResponse;
    public DeleteAttributesResponse withDeleteAttributesResponse(openapisdk.models.shared.DeleteAttributesResponse deleteAttributesResponse) {
        this.deleteAttributesResponse = deleteAttributesResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteAttributesResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DeleteAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object targetNotFoundException;
    public DeleteAttributesResponse withTargetNotFoundException(Object targetNotFoundException) {
        this.targetNotFoundException = targetNotFoundException;
        return this;
    }
}