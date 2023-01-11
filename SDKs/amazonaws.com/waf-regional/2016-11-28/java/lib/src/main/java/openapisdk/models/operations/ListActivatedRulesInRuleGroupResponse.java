package openapisdk.models.operations;



public class ListActivatedRulesInRuleGroupResponse {
    public String contentType;
    public ListActivatedRulesInRuleGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListActivatedRulesInRuleGroupResponse listActivatedRulesInRuleGroupResponse;
    public ListActivatedRulesInRuleGroupResponse withListActivatedRulesInRuleGroupResponse(openapisdk.models.shared.ListActivatedRulesInRuleGroupResponse listActivatedRulesInRuleGroupResponse) {
        this.listActivatedRulesInRuleGroupResponse = listActivatedRulesInRuleGroupResponse;
        return this;
    }
    public Long statusCode;
    public ListActivatedRulesInRuleGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public ListActivatedRulesInRuleGroupResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidParameterException;
    public ListActivatedRulesInRuleGroupResponse withWafInvalidParameterException(Object wafInvalidParameterException) {
        this.wafInvalidParameterException = wafInvalidParameterException;
        return this;
    }
    public Object wafNonexistentItemException;
    public ListActivatedRulesInRuleGroupResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
}