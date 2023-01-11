package openapisdk.models.operations;



public class DeleteTransactionRulesTransactionRuleIdResponse {
    public String contentType;
    public DeleteTransactionRulesTransactionRuleIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public DeleteTransactionRulesTransactionRuleIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public DeleteTransactionRulesTransactionRuleIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transactionRule;
    public DeleteTransactionRulesTransactionRuleIdResponse withTransactionRule(Object transactionRule) {
        this.transactionRule = transactionRule;
        return this;
    }
}