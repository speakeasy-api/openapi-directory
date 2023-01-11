package openapisdk.models.operations;



public class UpdateNodegroupVersionResponse {
    public Object clientException;
    public UpdateNodegroupVersionResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateNodegroupVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateNodegroupVersionResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateNodegroupVersionResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateNodegroupVersionResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateNodegroupVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public UpdateNodegroupVersionResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateNodegroupVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateNodegroupVersionResponse updateNodegroupVersionResponse;
    public UpdateNodegroupVersionResponse withUpdateNodegroupVersionResponse(openapisdk.models.shared.UpdateNodegroupVersionResponse updateNodegroupVersionResponse) {
        this.updateNodegroupVersionResponse = updateNodegroupVersionResponse;
        return this;
    }
}