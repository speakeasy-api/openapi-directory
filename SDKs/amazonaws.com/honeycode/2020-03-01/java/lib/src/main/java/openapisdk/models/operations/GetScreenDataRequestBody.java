package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetScreenDataRequestBody {
    @JsonProperty("appId")
    public String appId;
    public GetScreenDataRequestBody withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetScreenDataRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetScreenDataRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("screenId")
    public String screenId;
    public GetScreenDataRequestBody withScreenId(String screenId) {
        this.screenId = screenId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variables")
    public java.util.Map<String, openapisdk.models.shared.VariableValue> variables;
    public GetScreenDataRequestBody withVariables(java.util.Map<String, openapisdk.models.shared.VariableValue> variables) {
        this.variables = variables;
        return this;
    }
    @JsonProperty("workbookId")
    public String workbookId;
    public GetScreenDataRequestBody withWorkbookId(String workbookId) {
        this.workbookId = workbookId;
        return this;
    }
}