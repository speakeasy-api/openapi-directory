package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListRuleNamesByTargetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EventBusName")
    public String eventBusName;
    public ListRuleNamesByTargetRequest withEventBusName(String eventBusName) {
        this.eventBusName = eventBusName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public ListRuleNamesByTargetRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListRuleNamesByTargetRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("TargetArn")
    public String targetArn;
    public ListRuleNamesByTargetRequest withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}