package openapisdk.models.operations;



public class PatchTransactionRulesTransactionRuleIdResponse {
    public String contentType;
    public PatchTransactionRulesTransactionRuleIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public PatchTransactionRulesTransactionRuleIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PatchTransactionRulesTransactionRuleIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transactionRule;
    public PatchTransactionRulesTransactionRuleIdResponse withTransactionRule(Object transactionRule) {
        this.transactionRule = transactionRule;
        return this;
    }
}