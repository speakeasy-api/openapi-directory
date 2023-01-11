package openapisdk.models.operations;



public class UpdateShardCountResponse {
    public String contentType;
    public UpdateShardCountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateShardCountResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public UpdateShardCountResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateShardCountResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateShardCountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateShardCountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateShardCountOutput updateShardCountOutput;
    public UpdateShardCountResponse withUpdateShardCountOutput(openapisdk.models.shared.UpdateShardCountOutput updateShardCountOutput) {
        this.updateShardCountOutput = updateShardCountOutput;
        return this;
    }
}