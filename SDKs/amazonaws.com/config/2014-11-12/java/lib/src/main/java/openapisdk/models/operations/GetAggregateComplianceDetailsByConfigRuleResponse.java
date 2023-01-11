package openapisdk.models.operations;



public class GetAggregateComplianceDetailsByConfigRuleResponse {
    public String contentType;
    public GetAggregateComplianceDetailsByConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAggregateComplianceDetailsByConfigRuleResponse getAggregateComplianceDetailsByConfigRuleResponse;
    public GetAggregateComplianceDetailsByConfigRuleResponse withGetAggregateComplianceDetailsByConfigRuleResponse(openapisdk.models.shared.GetAggregateComplianceDetailsByConfigRuleResponse getAggregateComplianceDetailsByConfigRuleResponse) {
        this.getAggregateComplianceDetailsByConfigRuleResponse = getAggregateComplianceDetailsByConfigRuleResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetAggregateComplianceDetailsByConfigRuleResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetAggregateComplianceDetailsByConfigRuleResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public GetAggregateComplianceDetailsByConfigRuleResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public GetAggregateComplianceDetailsByConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAggregateComplianceDetailsByConfigRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}