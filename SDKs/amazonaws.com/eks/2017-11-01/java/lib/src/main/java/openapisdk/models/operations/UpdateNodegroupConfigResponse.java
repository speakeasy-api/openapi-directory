package openapisdk.models.operations;



public class UpdateNodegroupConfigResponse {
    public Object clientException;
    public UpdateNodegroupConfigResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateNodegroupConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public UpdateNodegroupConfigResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateNodegroupConfigResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateNodegroupConfigResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateNodegroupConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public UpdateNodegroupConfigResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public UpdateNodegroupConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateNodegroupConfigResponse updateNodegroupConfigResponse;
    public UpdateNodegroupConfigResponse withUpdateNodegroupConfigResponse(openapisdk.models.shared.UpdateNodegroupConfigResponse updateNodegroupConfigResponse) {
        this.updateNodegroupConfigResponse = updateNodegroupConfigResponse;
        return this;
    }
}