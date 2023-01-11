package openapisdk.models.operations;



public class DescribeEventsResponse {
    public String contentType;
    public DescribeEventsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventsResponse describeEventsResponse;
    public DescribeEventsResponse withDescribeEventsResponse(openapisdk.models.shared.DescribeEventsResponse describeEventsResponse) {
        this.describeEventsResponse = describeEventsResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeEventsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEventsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEventsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeEventsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}