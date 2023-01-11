package openapisdk.models.operations;



public class GetSolutionMetricsResponse {
    public String contentType;
    public GetSolutionMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSolutionMetricsResponse getSolutionMetricsResponse;
    public GetSolutionMetricsResponse withGetSolutionMetricsResponse(openapisdk.models.shared.GetSolutionMetricsResponse getSolutionMetricsResponse) {
        this.getSolutionMetricsResponse = getSolutionMetricsResponse;
        return this;
    }
    public Object invalidInputException;
    public GetSolutionMetricsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceInUseException;
    public GetSolutionMetricsResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSolutionMetricsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetSolutionMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}