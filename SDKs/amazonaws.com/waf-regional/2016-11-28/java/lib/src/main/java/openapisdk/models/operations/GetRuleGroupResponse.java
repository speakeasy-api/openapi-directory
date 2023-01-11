package openapisdk.models.operations;



public class GetRuleGroupResponse {
    public String contentType;
    public GetRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRuleGroupResponse getRuleGroupResponse;
    public GetRuleGroupResponse withGetRuleGroupResponse(openapisdk.models.shared.GetRuleGroupResponse getRuleGroupResponse) {
        this.getRuleGroupResponse = getRuleGroupResponse;
        return this;
    }
    public Long statusCode;
    public GetRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public GetRuleGroupResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafNonexistentItemException;
    public GetRuleGroupResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}