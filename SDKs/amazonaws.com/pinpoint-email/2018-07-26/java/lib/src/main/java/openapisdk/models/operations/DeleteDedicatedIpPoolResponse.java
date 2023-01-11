package openapisdk.models.operations;



public class DeleteDedicatedIpPoolResponse {
    public Object badRequestException;
    public DeleteDedicatedIpPoolResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteDedicatedIpPoolResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteDedicatedIpPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteDedicatedIpPoolResponse;
    public DeleteDedicatedIpPoolResponse withDeleteDedicatedIpPoolResponse(java.util.Map<String, Object> deleteDedicatedIpPoolResponse) {
        this.deleteDedicatedIpPoolResponse = deleteDedicatedIpPoolResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteDedicatedIpPoolResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDedicatedIpPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteDedicatedIpPoolResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}