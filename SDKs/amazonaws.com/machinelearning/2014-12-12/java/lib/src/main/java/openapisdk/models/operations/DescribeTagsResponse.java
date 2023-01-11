package openapisdk.models.operations;



public class DescribeTagsResponse {
    public String contentType;
    public DescribeTagsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTagsOutput describeTagsOutput;
    public DescribeTagsResponse withDescribeTagsOutput(openapisdk.models.shared.DescribeTagsOutput describeTagsOutput) {
        this.describeTagsOutput = describeTagsOutput;
        return this;
    }
    public Object internalServerException;
    public DescribeTagsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidInputException;
    public DescribeTagsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTagsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTagsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}