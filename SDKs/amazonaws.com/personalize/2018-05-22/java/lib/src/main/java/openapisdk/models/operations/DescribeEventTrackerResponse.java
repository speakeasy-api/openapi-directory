package openapisdk.models.operations;



public class DescribeEventTrackerResponse {
    public String contentType;
    public DescribeEventTrackerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventTrackerResponse describeEventTrackerResponse;
    public DescribeEventTrackerResponse withDescribeEventTrackerResponse(openapisdk.models.shared.DescribeEventTrackerResponse describeEventTrackerResponse) {
        this.describeEventTrackerResponse = describeEventTrackerResponse;
        return this;
    }
    public Object invalidInputException;
    public DescribeEventTrackerResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEventTrackerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEventTrackerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}