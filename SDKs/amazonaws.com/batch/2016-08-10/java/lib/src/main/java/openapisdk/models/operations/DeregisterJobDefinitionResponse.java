package openapisdk.models.operations;



public class DeregisterJobDefinitionResponse {
    public Object clientException;
    public DeregisterJobDefinitionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeregisterJobDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deregisterJobDefinitionResponse;
    public DeregisterJobDefinitionResponse withDeregisterJobDefinitionResponse(java.util.Map<String, Object> deregisterJobDefinitionResponse) {
        this.deregisterJobDefinitionResponse = deregisterJobDefinitionResponse;
        return this;
    }
    public Object serverException;
    public DeregisterJobDefinitionResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeregisterJobDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}