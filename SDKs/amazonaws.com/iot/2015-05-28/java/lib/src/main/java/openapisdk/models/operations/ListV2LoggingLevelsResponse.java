package openapisdk.models.operations;



public class ListV2LoggingLevelsResponse {
    public String contentType;
    public ListV2LoggingLevelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListV2LoggingLevelsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public ListV2LoggingLevelsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListV2LoggingLevelsResponse listV2LoggingLevelsResponse;
    public ListV2LoggingLevelsResponse withListV2LoggingLevelsResponse(openapisdk.models.shared.ListV2LoggingLevelsResponse listV2LoggingLevelsResponse) {
        this.listV2LoggingLevelsResponse = listV2LoggingLevelsResponse;
        return this;
    }
    public Object notConfiguredException;
    public ListV2LoggingLevelsResponse withNotConfiguredException(Object notConfiguredException) {
        this.notConfiguredException = notConfiguredException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListV2LoggingLevelsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListV2LoggingLevelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}