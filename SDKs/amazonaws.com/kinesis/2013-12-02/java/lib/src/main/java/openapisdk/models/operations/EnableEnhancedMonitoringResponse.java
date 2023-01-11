package openapisdk.models.operations;



public class EnableEnhancedMonitoringResponse {
    public String contentType;
    public EnableEnhancedMonitoringResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnhancedMonitoringOutput enhancedMonitoringOutput;
    public EnableEnhancedMonitoringResponse withEnhancedMonitoringOutput(openapisdk.models.shared.EnhancedMonitoringOutput enhancedMonitoringOutput) {
        this.enhancedMonitoringOutput = enhancedMonitoringOutput;
        return this;
    }
    public Object invalidArgumentException;
    public EnableEnhancedMonitoringResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public EnableEnhancedMonitoringResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public EnableEnhancedMonitoringResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public EnableEnhancedMonitoringResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public EnableEnhancedMonitoringResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}