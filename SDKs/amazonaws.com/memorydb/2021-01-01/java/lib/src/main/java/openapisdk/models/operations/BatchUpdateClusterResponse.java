package openapisdk.models.operations;



public class BatchUpdateClusterResponse {
    public openapisdk.models.shared.BatchUpdateClusterResponse batchUpdateClusterResponse;
    public BatchUpdateClusterResponse withBatchUpdateClusterResponse(openapisdk.models.shared.BatchUpdateClusterResponse batchUpdateClusterResponse) {
        this.batchUpdateClusterResponse = batchUpdateClusterResponse;
        return this;
    }
    public String contentType;
    public BatchUpdateClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public BatchUpdateClusterResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object serviceUpdateNotFoundFault;
    public BatchUpdateClusterResponse withServiceUpdateNotFoundFault(Object serviceUpdateNotFoundFault) {
        this.serviceUpdateNotFoundFault = serviceUpdateNotFoundFault;
        return this;
    }
    public Long statusCode;
    public BatchUpdateClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}