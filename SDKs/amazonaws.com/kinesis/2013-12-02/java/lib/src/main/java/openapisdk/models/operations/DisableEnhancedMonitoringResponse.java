package openapisdk.models.operations;



public class DisableEnhancedMonitoringResponse {
    public String contentType;
    public DisableEnhancedMonitoringResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.EnhancedMonitoringOutput enhancedMonitoringOutput;
    public DisableEnhancedMonitoringResponse withEnhancedMonitoringOutput(openapisdk.models.shared.EnhancedMonitoringOutput enhancedMonitoringOutput) {
        this.enhancedMonitoringOutput = enhancedMonitoringOutput;
        return this;
    }
    public Object invalidArgumentException;
    public DisableEnhancedMonitoringResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object limitExceededException;
    public DisableEnhancedMonitoringResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceInUseException;
    public DisableEnhancedMonitoringResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public DisableEnhancedMonitoringResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DisableEnhancedMonitoringResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}