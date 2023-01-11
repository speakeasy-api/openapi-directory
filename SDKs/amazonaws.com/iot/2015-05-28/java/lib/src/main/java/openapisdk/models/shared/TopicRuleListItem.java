package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * TopicRuleListItem
 * Describes a rule.
**/
public class TopicRuleListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public TopicRuleListItem withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleArn")
    public String ruleArn;
    public TopicRuleListItem withRuleArn(String ruleArn) {
        this.ruleArn = ruleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleDisabled")
    public Boolean ruleDisabled;
    public TopicRuleListItem withRuleDisabled(Boolean ruleDisabled) {
        this.ruleDisabled = ruleDisabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ruleName")
    public String ruleName;
    public TopicRuleListItem withRuleName(String ruleName) {
        this.ruleName = ruleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("topicPattern")
    public String topicPattern;
    public TopicRuleListItem withTopicPattern(String topicPattern) {
        this.topicPattern = topicPattern;
        return this;
    }
}