package openapisdk.models.operations;



public class DescribeConfigurationAggregatorsResponse {
    public String contentType;
    public DescribeConfigurationAggregatorsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeConfigurationAggregatorsResponse describeConfigurationAggregatorsResponse;
    public DescribeConfigurationAggregatorsResponse withDescribeConfigurationAggregatorsResponse(openapisdk.models.shared.DescribeConfigurationAggregatorsResponse describeConfigurationAggregatorsResponse) {
        this.describeConfigurationAggregatorsResponse = describeConfigurationAggregatorsResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeConfigurationAggregatorsResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeConfigurationAggregatorsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeConfigurationAggregatorsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public DescribeConfigurationAggregatorsResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public DescribeConfigurationAggregatorsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}