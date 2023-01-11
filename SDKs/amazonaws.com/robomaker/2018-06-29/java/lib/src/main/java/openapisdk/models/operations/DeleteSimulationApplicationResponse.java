package openapisdk.models.operations;



public class DeleteSimulationApplicationResponse {
    public String contentType;
    public DeleteSimulationApplicationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSimulationApplicationResponse;
    public DeleteSimulationApplicationResponse withDeleteSimulationApplicationResponse(java.util.Map<String, Object> deleteSimulationApplicationResponse) {
        this.deleteSimulationApplicationResponse = deleteSimulationApplicationResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteSimulationApplicationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteSimulationApplicationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DeleteSimulationApplicationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteSimulationApplicationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}