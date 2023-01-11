package openapisdk.models.operations;



public class CreateAgentResponse {
    public String contentType;
    public CreateAgentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAgentResponse createAgentResponse;
    public CreateAgentResponse withCreateAgentResponse(openapisdk.models.shared.CreateAgentResponse createAgentResponse) {
        this.createAgentResponse = createAgentResponse;
        return this;
    }
    public Object internalException;
    public CreateAgentResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateAgentResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateAgentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}