package openapisdk.models.operations;



public class PostTransactionRulesResponse {
    public String contentType;
    public PostTransactionRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object restServiceError;
    public PostTransactionRulesResponse withRestServiceError(Object restServiceError) {
        this.restServiceError = restServiceError;
        return this;
    }
    public Long statusCode;
    public PostTransactionRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object transactionRule;
    public PostTransactionRulesResponse withTransactionRule(Object transactionRule) {
        this.transactionRule = transactionRule;
        return this;
    }
}