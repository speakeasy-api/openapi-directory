package openapisdk.models.operations;



public class GetRulesExecutionsResponse {
    public openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage;
    public GetRulesExecutionsResponse withBeezUpCommonErrorResponseMessage(openapisdk.models.shared.BeezUpCommonErrorResponseMessage beezUPCommonErrorResponseMessage) {
        this.beezUPCommonErrorResponseMessage = beezUPCommonErrorResponseMessage;
        return this;
    }
    public String contentType;
    public GetRulesExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetRulesExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.RuleExecutionReportings ruleExecutionReportings;
    public GetRulesExecutionsResponse withRuleExecutionReportings(openapisdk.models.shared.RuleExecutionReportings ruleExecutionReportings) {
        this.ruleExecutionReportings = ruleExecutionReportings;
        return this;
    }
}