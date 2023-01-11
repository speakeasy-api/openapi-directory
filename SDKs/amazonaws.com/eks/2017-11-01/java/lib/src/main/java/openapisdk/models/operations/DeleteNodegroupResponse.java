package openapisdk.models.operations;



public class DeleteNodegroupResponse {
    public Object clientException;
    public DeleteNodegroupResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public DeleteNodegroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteNodegroupResponse deleteNodegroupResponse;
    public DeleteNodegroupResponse withDeleteNodegroupResponse(openapisdk.models.shared.DeleteNodegroupResponse deleteNodegroupResponse) {
        this.deleteNodegroupResponse = deleteNodegroupResponse;
        return this;
    }
    public Object invalidParameterException;
    public DeleteNodegroupResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteNodegroupResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteNodegroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serverException;
    public DeleteNodegroupResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteNodegroupResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteNodegroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}