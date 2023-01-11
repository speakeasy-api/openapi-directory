package openapisdk.models.operations;



public class DeleteDimensionResponse {
    public String contentType;
    public DeleteDimensionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDimensionResponse;
    public DeleteDimensionResponse withDeleteDimensionResponse(java.util.Map<String, Object> deleteDimensionResponse) {
        this.deleteDimensionResponse = deleteDimensionResponse;
        return this;
    }
    public Object internalFailureException;
    public DeleteDimensionResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteDimensionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteDimensionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteDimensionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}