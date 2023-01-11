package openapisdk.models.operations;



public class ListFleetMetricsResponse {
    public String contentType;
    public ListFleetMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListFleetMetricsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListFleetMetricsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListFleetMetricsResponse listFleetMetricsResponse;
    public ListFleetMetricsResponse withListFleetMetricsResponse(openapisdk.models.shared.ListFleetMetricsResponse listFleetMetricsResponse) {
        this.listFleetMetricsResponse = listFleetMetricsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListFleetMetricsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListFleetMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFleetMetricsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListFleetMetricsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}