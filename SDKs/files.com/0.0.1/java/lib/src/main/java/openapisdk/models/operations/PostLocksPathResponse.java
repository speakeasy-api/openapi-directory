package openapisdk.models.operations;



public class PostLocksPathResponse {
    public String contentType;
    public PostLocksPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LockEntity lockEntity;
    public PostLocksPathResponse withLockEntity(openapisdk.models.shared.LockEntity lockEntity) {
        this.lockEntity = lockEntity;
        return this;
    }
    public Long statusCode;
    public PostLocksPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}