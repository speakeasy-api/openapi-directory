package openapisdk.models.operations;



public class DeleteAgentResponse {
    public String contentType;
    public DeleteAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAgentResponse;
    public DeleteAgentResponse withDeleteAgentResponse(java.util.Map<String, Object> deleteAgentResponse) {
        this.deleteAgentResponse = deleteAgentResponse;
        return this;
    }
    public Object internalException;
    public DeleteAgentResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAgentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DeleteAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}