package openapisdk.models.operations;



public class GetTransactionRulesTransactionRuleIdResponse {
    public String contentType;
    public GetTransactionRulesTransactionRuleIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public GetTransactionRulesTransactionRuleIdResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public GetTransactionRulesTransactionRuleIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transactionRuleResponse;
    public GetTransactionRulesTransactionRuleIdResponse withTransactionRuleResponse(Object transactionRuleResponse) {
        this.transactionRuleResponse = transactionRuleResponse;
        return this;
    }
}