package openapisdk.models.operations;



public class GetAccuracyMetricsResponse {
    public String contentType;
    public GetAccuracyMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAccuracyMetricsResponse getAccuracyMetricsResponse;
    public GetAccuracyMetricsResponse withGetAccuracyMetricsResponse(openapisdk.models.shared.GetAccuracyMetricsResponse getAccuracyMetricsResponse) {
        this.getAccuracyMetricsResponse = getAccuracyMetricsResponse;
        return this;
    }
    public Object invalidInputException;
    public GetAccuracyMetricsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public GetAccuracyMetricsResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAccuracyMetricsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetAccuracyMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}