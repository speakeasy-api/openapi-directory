package openapisdk.models.operations;



public class DescribeConfigurationAggregatorSourcesStatusResponse {
    public String contentType;
    public DescribeConfigurationAggregatorSourcesStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConfigurationAggregatorSourcesStatusResponse describeConfigurationAggregatorSourcesStatusResponse;
    public DescribeConfigurationAggregatorSourcesStatusResponse withDescribeConfigurationAggregatorSourcesStatusResponse(openapisdk.models.shared.DescribeConfigurationAggregatorSourcesStatusResponse describeConfigurationAggregatorSourcesStatusResponse) {
        this.describeConfigurationAggregatorSourcesStatusResponse = describeConfigurationAggregatorSourcesStatusResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeConfigurationAggregatorSourcesStatusResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeConfigurationAggregatorSourcesStatusResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeConfigurationAggregatorSourcesStatusResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public DescribeConfigurationAggregatorSourcesStatusResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public DescribeConfigurationAggregatorSourcesStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}