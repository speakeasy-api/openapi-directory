package openapisdk.models.operations;



public class DescribeEntityRecognizerResponse {
    public String contentType;
    public DescribeEntityRecognizerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEntityRecognizerResponse describeEntityRecognizerResponse;
    public DescribeEntityRecognizerResponse withDescribeEntityRecognizerResponse(openapisdk.models.shared.DescribeEntityRecognizerResponse describeEntityRecognizerResponse) {
        this.describeEntityRecognizerResponse = describeEntityRecognizerResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeEntityRecognizerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeEntityRecognizerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEntityRecognizerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEntityRecognizerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeEntityRecognizerResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}