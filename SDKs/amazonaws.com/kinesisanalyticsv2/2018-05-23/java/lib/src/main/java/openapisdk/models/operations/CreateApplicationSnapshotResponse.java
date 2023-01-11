package openapisdk.models.operations;



public class CreateApplicationSnapshotResponse {
    public String contentType;
    public CreateApplicationSnapshotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createApplicationSnapshotResponse;
    public CreateApplicationSnapshotResponse withCreateApplicationSnapshotResponse(java.util.Map<String, Object> createApplicationSnapshotResponse) {
        this.createApplicationSnapshotResponse = createApplicationSnapshotResponse;
        return this;
    }
    public Object invalidApplicationConfigurationException;
    public CreateApplicationSnapshotResponse withInvalidApplicationConfigurationException(Object invalidApplicationConfigurationException) {
        this.invalidApplicationConfigurationException = invalidApplicationConfigurationException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateApplicationSnapshotResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidRequestException;
    public CreateApplicationSnapshotResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public CreateApplicationSnapshotResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public CreateApplicationSnapshotResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateApplicationSnapshotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateApplicationSnapshotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public CreateApplicationSnapshotResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}