package openapisdk.models.operations;



public class GetV2LoggingOptionsResponse {
    public String contentType;
    public GetV2LoggingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetV2LoggingOptionsResponse getV2LoggingOptionsResponse;
    public GetV2LoggingOptionsResponse withGetV2LoggingOptionsResponse(openapisdk.models.shared.GetV2LoggingOptionsResponse getV2LoggingOptionsResponse) {
        this.getV2LoggingOptionsResponse = getV2LoggingOptionsResponse;
        return this;
    }
    public Object internalException;
    public GetV2LoggingOptionsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object notConfiguredException;
    public GetV2LoggingOptionsResponse withNotConfiguredException(Object notConfiguredException) {
        this.notConfiguredException = notConfiguredException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetV2LoggingOptionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetV2LoggingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}