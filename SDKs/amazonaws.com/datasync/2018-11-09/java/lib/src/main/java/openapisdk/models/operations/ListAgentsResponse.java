package openapisdk.models.operations;



public class ListAgentsResponse {
    public String contentType;
    public ListAgentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListAgentsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ListAgentsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAgentsResponse listAgentsResponse;
    public ListAgentsResponse withListAgentsResponse(openapisdk.models.shared.ListAgentsResponse listAgentsResponse) {
        this.listAgentsResponse = listAgentsResponse;
        return this;
    }
    public Long statusCode;
    public ListAgentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}