package openapisdk.models.operations;



public class ListRuleGroupsResponse {
    public String contentType;
    public ListRuleGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListRuleGroupsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public ListRuleGroupsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
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
    public Object throttlingException;
    public ListRuleGroupsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}