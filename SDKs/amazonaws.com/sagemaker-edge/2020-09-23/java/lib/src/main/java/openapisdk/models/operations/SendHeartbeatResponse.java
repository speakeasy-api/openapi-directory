package openapisdk.models.operations;



public class SendHeartbeatResponse {
    public String contentType;
    public SendHeartbeatResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public SendHeartbeatResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Long statusCode;
    public SendHeartbeatResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}