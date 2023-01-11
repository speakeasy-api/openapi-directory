package openapisdk.models.operations;



public class DeleteV2LoggingLevelResponse {
    public String contentType;
    public DeleteV2LoggingLevelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public DeleteV2LoggingLevelResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteV2LoggingLevelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public DeleteV2LoggingLevelResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DeleteV2LoggingLevelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}