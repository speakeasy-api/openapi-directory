package openapisdk.models.operations;



public class DescribeRetentionConfigurationsResponse {
    public String contentType;
    public DescribeRetentionConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRetentionConfigurationsResponse describeRetentionConfigurationsResponse;
    public DescribeRetentionConfigurationsResponse withDescribeRetentionConfigurationsResponse(openapisdk.models.shared.DescribeRetentionConfigurationsResponse describeRetentionConfigurationsResponse) {
        this.describeRetentionConfigurationsResponse = describeRetentionConfigurationsResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeRetentionConfigurationsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeRetentionConfigurationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchRetentionConfigurationException;
    public DescribeRetentionConfigurationsResponse withNoSuchRetentionConfigurationException(Object noSuchRetentionConfigurationException) {
        this.noSuchRetentionConfigurationException = noSuchRetentionConfigurationException;
        return this;
    }
    public Long statusCode;
    public DescribeRetentionConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}