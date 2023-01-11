package openapisdk.models.operations;



public class DescribeAggregationAuthorizationsResponse {
    public String contentType;
    public DescribeAggregationAuthorizationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAggregationAuthorizationsResponse describeAggregationAuthorizationsResponse;
    public DescribeAggregationAuthorizationsResponse withDescribeAggregationAuthorizationsResponse(openapisdk.models.shared.DescribeAggregationAuthorizationsResponse describeAggregationAuthorizationsResponse) {
        this.describeAggregationAuthorizationsResponse = describeAggregationAuthorizationsResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeAggregationAuthorizationsResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeAggregationAuthorizationsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeAggregationAuthorizationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Long statusCode;
    public DescribeAggregationAuthorizationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}