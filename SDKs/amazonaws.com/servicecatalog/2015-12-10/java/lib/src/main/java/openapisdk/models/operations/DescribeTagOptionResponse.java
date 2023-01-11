package openapisdk.models.operations;



public class DescribeTagOptionResponse {
    public String contentType;
    public DescribeTagOptionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTagOptionOutput describeTagOptionOutput;
    public DescribeTagOptionResponse withDescribeTagOptionOutput(openapisdk.models.shared.DescribeTagOptionOutput describeTagOptionOutput) {
        this.describeTagOptionOutput = describeTagOptionOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTagOptionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTagOptionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tagOptionNotMigratedException;
    public DescribeTagOptionResponse withTagOptionNotMigratedException(Object tagOptionNotMigratedException) {
        this.tagOptionNotMigratedException = tagOptionNotMigratedException;
        return this;
    }
}