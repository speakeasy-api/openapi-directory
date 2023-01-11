package openapisdk.models.operations;



public class ListOtaUpdatesResponse {
    public String contentType;
    public ListOtaUpdatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListOtaUpdatesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListOtaUpdatesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListOtaUpdatesResponse listOTAUpdatesResponse;
    public ListOtaUpdatesResponse withListOtaUpdatesResponse(openapisdk.models.shared.ListOtaUpdatesResponse listOTAUpdatesResponse) {
        this.listOTAUpdatesResponse = listOTAUpdatesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListOtaUpdatesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListOtaUpdatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListOtaUpdatesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListOtaUpdatesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}