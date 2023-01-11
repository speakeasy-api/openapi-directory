package openapisdk.models.operations;



public class DeregisterTaskDefinitionResponse {
    public Object clientException;
    public DeregisterTaskDefinitionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeregisterTaskDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeregisterTaskDefinitionResponse deregisterTaskDefinitionResponse;
    public DeregisterTaskDefinitionResponse withDeregisterTaskDefinitionResponse(openapisdk.models.shared.DeregisterTaskDefinitionResponse deregisterTaskDefinitionResponse) {
        this.deregisterTaskDefinitionResponse = deregisterTaskDefinitionResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeregisterTaskDefinitionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object serverException;
    public DeregisterTaskDefinitionResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeregisterTaskDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}