package openapisdk.models.operations;



public class GetAggregateConfigRuleComplianceSummaryResponse {
    public String contentType;
    public GetAggregateConfigRuleComplianceSummaryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAggregateConfigRuleComplianceSummaryResponse getAggregateConfigRuleComplianceSummaryResponse;
    public GetAggregateConfigRuleComplianceSummaryResponse withGetAggregateConfigRuleComplianceSummaryResponse(openapisdk.models.shared.GetAggregateConfigRuleComplianceSummaryResponse getAggregateConfigRuleComplianceSummaryResponse) {
        this.getAggregateConfigRuleComplianceSummaryResponse = getAggregateConfigRuleComplianceSummaryResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetAggregateConfigRuleComplianceSummaryResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetAggregateConfigRuleComplianceSummaryResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchConfigurationAggregatorException;
    public GetAggregateConfigRuleComplianceSummaryResponse withNoSuchConfigurationAggregatorException(Object noSuchConfigurationAggregatorException) {
        this.noSuchConfigurationAggregatorException = noSuchConfigurationAggregatorException;
        return this;
    }
    public Long statusCode;
    public GetAggregateConfigRuleComplianceSummaryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAggregateConfigRuleComplianceSummaryResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}