package openapisdk.models.operations;



public class SetV2LoggingLevelResponse {
    public String contentType;
    public SetV2LoggingLevelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public SetV2LoggingLevelResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public SetV2LoggingLevelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public SetV2LoggingLevelResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notConfiguredException;
    public SetV2LoggingLevelResponse withNotConfiguredException(Object notConfiguredException) {
        this.notConfiguredException = notConfiguredException;
        return this;
    }
    public Object serviceUnavailableException;
    public SetV2LoggingLevelResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public SetV2LoggingLevelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}