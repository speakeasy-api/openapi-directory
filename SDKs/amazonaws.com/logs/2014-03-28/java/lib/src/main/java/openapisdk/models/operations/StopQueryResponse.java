package openapisdk.models.operations;



public class StopQueryResponse {
    public String contentType;
    public StopQueryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterException;
    public StopQueryResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object resourceNotFoundException;
    public StopQueryResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public StopQueryResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public StopQueryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.StopQueryResponse stopQueryResponse;
    public StopQueryResponse withStopQueryResponse(openapisdk.models.shared.StopQueryResponse stopQueryResponse) {
        this.stopQueryResponse = stopQueryResponse;
        return this;
    }
}