package openapisdk.models.operations;



public class GetComplianceDetailsByConfigRuleResponse {
    public String contentType;
    public GetComplianceDetailsByConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComplianceDetailsByConfigRuleResponse getComplianceDetailsByConfigRuleResponse;
    public GetComplianceDetailsByConfigRuleResponse withGetComplianceDetailsByConfigRuleResponse(openapisdk.models.shared.GetComplianceDetailsByConfigRuleResponse getComplianceDetailsByConfigRuleResponse) {
        this.getComplianceDetailsByConfigRuleResponse = getComplianceDetailsByConfigRuleResponse;
        return this;
    }
    public Object invalidNextTokenException;
    public GetComplianceDetailsByConfigRuleResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetComplianceDetailsByConfigRuleResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object noSuchConfigRuleException;
    public GetComplianceDetailsByConfigRuleResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public Long statusCode;
    public GetComplianceDetailsByConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}