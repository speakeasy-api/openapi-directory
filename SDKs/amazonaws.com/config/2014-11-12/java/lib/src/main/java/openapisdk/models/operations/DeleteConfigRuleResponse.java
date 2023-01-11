package openapisdk.models.operations;



public class DeleteConfigRuleResponse {
    public String contentType;
    public DeleteConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchConfigRuleException;
    public DeleteConfigRuleResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteConfigRuleResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}