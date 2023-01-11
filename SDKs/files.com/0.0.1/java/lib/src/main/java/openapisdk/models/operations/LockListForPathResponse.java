package openapisdk.models.operations;



public class LockListForPathResponse {
    public String contentType;
    public LockListForPathResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.LockEntity[] lockEntities;
    public LockListForPathResponse withLockEntities(openapisdk.models.shared.LockEntity[] lockEntities) {
        this.lockEntities = lockEntities;
        return this;
    }
    public Long statusCode;
    public LockListForPathResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}