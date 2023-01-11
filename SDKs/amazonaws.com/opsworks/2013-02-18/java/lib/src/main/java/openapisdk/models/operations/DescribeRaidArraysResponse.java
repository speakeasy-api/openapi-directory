package openapisdk.models.operations;



public class DescribeRaidArraysResponse {
    public String contentType;
    public DescribeRaidArraysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRaidArraysResult describeRaidArraysResult;
    public DescribeRaidArraysResponse withDescribeRaidArraysResult(openapisdk.models.shared.DescribeRaidArraysResult describeRaidArraysResult) {
        this.describeRaidArraysResult = describeRaidArraysResult;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRaidArraysResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRaidArraysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeRaidArraysResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}