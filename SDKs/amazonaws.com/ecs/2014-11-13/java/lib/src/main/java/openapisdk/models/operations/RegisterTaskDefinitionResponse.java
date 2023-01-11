package openapisdk.models.operations;



public class RegisterTaskDefinitionResponse {
    public Object clientException;
    public RegisterTaskDefinitionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RegisterTaskDefinitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public RegisterTaskDefinitionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.RegisterTaskDefinitionResponse registerTaskDefinitionResponse;
    public RegisterTaskDefinitionResponse withRegisterTaskDefinitionResponse(openapisdk.models.shared.RegisterTaskDefinitionResponse registerTaskDefinitionResponse) {
        this.registerTaskDefinitionResponse = registerTaskDefinitionResponse;
        return this;
    }
    public Object serverException;
    public RegisterTaskDefinitionResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public RegisterTaskDefinitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}