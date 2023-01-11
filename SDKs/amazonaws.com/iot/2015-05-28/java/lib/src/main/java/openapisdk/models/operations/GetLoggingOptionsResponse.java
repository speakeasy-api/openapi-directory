package openapisdk.models.operations;



public class GetLoggingOptionsResponse {
    public String contentType;
    public GetLoggingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLoggingOptionsResponse getLoggingOptionsResponse;
    public GetLoggingOptionsResponse withGetLoggingOptionsResponse(openapisdk.models.shared.GetLoggingOptionsResponse getLoggingOptionsResponse) {
        this.getLoggingOptionsResponse = getLoggingOptionsResponse;
        return this;
    }
    public Object internalException;
    public GetLoggingOptionsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public GetLoggingOptionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetLoggingOptionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetLoggingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}