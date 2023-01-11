package openapisdk.models.operations;



public class ListTargetsByRuleResponse {
    public String contentType;
    public ListTargetsByRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListTargetsByRuleResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListTargetsByRuleResponse listTargetsByRuleResponse;
    public ListTargetsByRuleResponse withListTargetsByRuleResponse(openapisdk.models.shared.ListTargetsByRuleResponse listTargetsByRuleResponse) {
        this.listTargetsByRuleResponse = listTargetsByRuleResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListTargetsByRuleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListTargetsByRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}