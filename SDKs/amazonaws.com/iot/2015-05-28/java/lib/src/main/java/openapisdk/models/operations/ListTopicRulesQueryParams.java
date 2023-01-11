package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListTopicRulesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxResults")
    public Long maxResults;
    public ListTopicRulesQueryParams withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nextToken")
    public String nextToken;
    public ListTopicRulesQueryParams withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ruleDisabled")
    public Boolean ruleDisabled;
    public ListTopicRulesQueryParams withRuleDisabled(Boolean ruleDisabled) {
        this.ruleDisabled = ruleDisabled;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=topic")
    public String topic;
    public ListTopicRulesQueryParams withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}