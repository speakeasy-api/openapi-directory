package openapisdk.models.operations;



public class DescribeObservationResponse {
    public String contentType;
    public DescribeObservationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeObservationResponse describeObservationResponse;
    public DescribeObservationResponse withDescribeObservationResponse(openapisdk.models.shared.DescribeObservationResponse describeObservationResponse) {
        this.describeObservationResponse = describeObservationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeObservationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeObservationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeObservationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeObservationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}