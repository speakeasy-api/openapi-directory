package openapisdk.models.operations;



public class CreateNodegroupResponse {
    public Object clientException;
    public CreateNodegroupResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateNodegroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateNodegroupResponse createNodegroupResponse;
    public CreateNodegroupResponse withCreateNodegroupResponse(openapisdk.models.shared.CreateNodegroupResponse createNodegroupResponse) {
        this.createNodegroupResponse = createNodegroupResponse;
        return this;
    }
    public Object invalidParameterException;
    public CreateNodegroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object invalidRequestException;
    public CreateNodegroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public CreateNodegroupResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateNodegroupResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object serverException;
    public CreateNodegroupResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateNodegroupResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateNodegroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}