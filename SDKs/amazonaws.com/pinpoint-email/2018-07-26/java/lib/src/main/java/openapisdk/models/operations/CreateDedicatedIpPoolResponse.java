package openapisdk.models.operations;



public class CreateDedicatedIpPoolResponse {
    public Object alreadyExistsException;
    public CreateDedicatedIpPoolResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public Object badRequestException;
    public CreateDedicatedIpPoolResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public CreateDedicatedIpPoolResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public CreateDedicatedIpPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createDedicatedIpPoolResponse;
    public CreateDedicatedIpPoolResponse withCreateDedicatedIpPoolResponse(java.util.Map<String, Object> createDedicatedIpPoolResponse) {
        this.createDedicatedIpPoolResponse = createDedicatedIpPoolResponse;
        return this;
    }
    public Object limitExceededException;
    public CreateDedicatedIpPoolResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateDedicatedIpPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateDedicatedIpPoolResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}