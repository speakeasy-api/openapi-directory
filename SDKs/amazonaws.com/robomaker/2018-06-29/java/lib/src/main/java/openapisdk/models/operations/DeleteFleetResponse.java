package openapisdk.models.operations;



public class DeleteFleetResponse {
    public String contentType;
    public DeleteFleetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteFleetResponse;
    public DeleteFleetResponse withDeleteFleetResponse(java.util.Map<String, Object> deleteFleetResponse) {
        this.deleteFleetResponse = deleteFleetResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteFleetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public DeleteFleetResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Long statusCode;
    public DeleteFleetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteFleetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}