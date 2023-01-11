package openapisdk.models.operations;



public class DeleteAddonResponse {
    public Object clientException;
    public DeleteAddonResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteAddonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAddonResponse deleteAddonResponse;
    public DeleteAddonResponse withDeleteAddonResponse(openapisdk.models.shared.DeleteAddonResponse deleteAddonResponse) {
        this.deleteAddonResponse = deleteAddonResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteAddonResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteAddonResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAddonResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteAddonResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public DeleteAddonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}