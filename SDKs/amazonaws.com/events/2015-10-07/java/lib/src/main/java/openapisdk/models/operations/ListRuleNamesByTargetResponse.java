package openapisdk.models.operations;



public class ListRuleNamesByTargetResponse {
    public String contentType;
    public ListRuleNamesByTargetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListRuleNamesByTargetResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListRuleNamesByTargetResponse listRuleNamesByTargetResponse;
    public ListRuleNamesByTargetResponse withListRuleNamesByTargetResponse(openapisdk.models.shared.ListRuleNamesByTargetResponse listRuleNamesByTargetResponse) {
        this.listRuleNamesByTargetResponse = listRuleNamesByTargetResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListRuleNamesByTargetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListRuleNamesByTargetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}