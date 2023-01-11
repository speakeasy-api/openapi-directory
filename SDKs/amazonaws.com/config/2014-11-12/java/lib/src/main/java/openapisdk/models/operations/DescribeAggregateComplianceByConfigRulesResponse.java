package openapisdk.models.operations;



public class DescribeAggregateComplianceByConfigRulesResponse {
    public String contentType;
    public DescribeAggregateComplianceByConfigRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAggregateComplianceByConfigRulesResponse describeAggregateComplianceByConfigRulesResponse;
    public DescribeAggregateComplianceByConfigRulesResponse withDescribeAggregateComplianceByConfigRulesResponse(openapisdk.models.shared.DescribeAggregateComplianceByConfigRulesResponse describeAggregateComplianceByConfigRulesResponse) {
        this.describeAggregateComplianceByConfigRulesResponse = describeAggregateComplianceByConfigRulesResponse;
        return this;
    }
    public Object invalidLimitException;
    public DescribeAggregateComplianceByConfigRulesResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public DescribeAggregateComplianceByConfigRulesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public DescribeAggregateComplianceByConfigRulesResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public DescribeAggregateComplianceByConfigRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeAggregateComplianceByConfigRulesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}