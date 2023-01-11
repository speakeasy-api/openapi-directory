package openapisdk.models.operations;



public class UpdateAgentResponse {
    public String contentType;
    public UpdateAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public UpdateAgentResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateAgentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public UpdateAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateAgentResponse;
    public UpdateAgentResponse withUpdateAgentResponse(java.util.Map<String, Object> updateAgentResponse) {
        this.updateAgentResponse = updateAgentResponse;
        return this;
    }
}