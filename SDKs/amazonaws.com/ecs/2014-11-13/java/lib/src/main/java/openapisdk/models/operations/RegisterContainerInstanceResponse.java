package openapisdk.models.operations;



public class RegisterContainerInstanceResponse {
    public Object clientException;
    public RegisterContainerInstanceResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public RegisterContainerInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public RegisterContainerInstanceResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.RegisterContainerInstanceResponse registerContainerInstanceResponse;
    public RegisterContainerInstanceResponse withRegisterContainerInstanceResponse(openapisdk.models.shared.RegisterContainerInstanceResponse registerContainerInstanceResponse) {
        this.registerContainerInstanceResponse = registerContainerInstanceResponse;
        return this;
    }
    public Object serverException;
    public RegisterContainerInstanceResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public RegisterContainerInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}