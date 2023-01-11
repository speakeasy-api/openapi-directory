package openapisdk.models.operations;



public class RegisterJobDefinitionResponse {
    public Object clientException;
    public RegisterJobDefinitionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RegisterJobDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.RegisterJobDefinitionResponse registerJobDefinitionResponse;
    public RegisterJobDefinitionResponse withRegisterJobDefinitionResponse(openapisdk.models.shared.RegisterJobDefinitionResponse registerJobDefinitionResponse) {
        this.registerJobDefinitionResponse = registerJobDefinitionResponse;
        return this;
    }
    public Object serverException;
    public RegisterJobDefinitionResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public RegisterJobDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}