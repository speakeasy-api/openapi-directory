package openapisdk.models.operations;



public class DeleteGlobalRuleResponse {
    public String contentType;
    public DeleteGlobalRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public DeleteGlobalRuleResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public DeleteGlobalRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}