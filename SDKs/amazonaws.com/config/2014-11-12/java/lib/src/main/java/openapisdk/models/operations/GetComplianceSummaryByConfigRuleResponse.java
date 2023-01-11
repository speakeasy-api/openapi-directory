package openapisdk.models.operations;



public class GetComplianceSummaryByConfigRuleResponse {
    public String contentType;
    public GetComplianceSummaryByConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetComplianceSummaryByConfigRuleResponse getComplianceSummaryByConfigRuleResponse;
    public GetComplianceSummaryByConfigRuleResponse withGetComplianceSummaryByConfigRuleResponse(openapisdk.models.shared.GetComplianceSummaryByConfigRuleResponse getComplianceSummaryByConfigRuleResponse) {
        this.getComplianceSummaryByConfigRuleResponse = getComplianceSummaryByConfigRuleResponse;
        return this;
    }
    public Long statusCode;
    public GetComplianceSummaryByConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}