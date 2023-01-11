package openapisdk.models.operations;



public class CreateAddonResponse {
    public Object clientException;
    public CreateAddonResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateAddonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateAddonResponse createAddonResponse;
    public CreateAddonResponse withCreateAddonResponse(openapisdk.models.shared.CreateAddonResponse createAddonResponse) {
        this.createAddonResponse = createAddonResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateAddonResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public CreateAddonResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public CreateAddonResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateAddonResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public CreateAddonResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public CreateAddonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}