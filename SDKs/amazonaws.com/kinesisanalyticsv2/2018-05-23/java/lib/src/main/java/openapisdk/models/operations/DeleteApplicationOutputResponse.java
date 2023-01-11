package openapisdk.models.operations;



public class DeleteApplicationOutputResponse {
    public Object concurrentModificationException;
    public DeleteApplicationOutputResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteApplicationOutputResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteApplicationOutputResponse deleteApplicationOutputResponse;
    public DeleteApplicationOutputResponse withDeleteApplicationOutputResponse(openapisdk.models.shared.DeleteApplicationOutputResponse deleteApplicationOutputResponse) {
        this.deleteApplicationOutputResponse = deleteApplicationOutputResponse;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteApplicationOutputResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteApplicationOutputResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteApplicationOutputResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteApplicationOutputResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteApplicationOutputResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}