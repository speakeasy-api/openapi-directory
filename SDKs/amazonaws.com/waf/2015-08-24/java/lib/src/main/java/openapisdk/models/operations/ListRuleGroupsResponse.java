package openapisdk.models.operations;



public class ListRuleGroupsResponse {
    public String contentType;
    public ListRuleGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListRuleGroupsResponse listRuleGroupsResponse;
    public ListRuleGroupsResponse withListRuleGroupsResponse(openapisdk.models.shared.ListRuleGroupsResponse listRuleGroupsResponse) {
        this.listRuleGroupsResponse = listRuleGroupsResponse;
        return this;
    }
    public Long statusCode;
    public ListRuleGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListRuleGroupsResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
}