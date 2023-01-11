package openapisdk.models.operations;



public class DescribeRulesPackagesResponse {
    public String contentType;
    public DescribeRulesPackagesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRulesPackagesResponse describeRulesPackagesResponse;
    public DescribeRulesPackagesResponse withDescribeRulesPackagesResponse(openapisdk.models.shared.DescribeRulesPackagesResponse describeRulesPackagesResponse) {
        this.describeRulesPackagesResponse = describeRulesPackagesResponse;
        return this;
    }
    public Object internalException;
    public DescribeRulesPackagesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DescribeRulesPackagesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeRulesPackagesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}