package openapisdk.models.operations;



public class ListSubscribedRuleGroupsResponse {
    public String contentType;
    public ListSubscribedRuleGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListSubscribedRuleGroupsResponse listSubscribedRuleGroupsResponse;
    public ListSubscribedRuleGroupsResponse withListSubscribedRuleGroupsResponse(openapisdk.models.shared.ListSubscribedRuleGroupsResponse listSubscribedRuleGroupsResponse) {
        this.listSubscribedRuleGroupsResponse = listSubscribedRuleGroupsResponse;
        return this;
    }
    public Long statusCode;
    public ListSubscribedRuleGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListSubscribedRuleGroupsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public ListSubscribedRuleGroupsResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}