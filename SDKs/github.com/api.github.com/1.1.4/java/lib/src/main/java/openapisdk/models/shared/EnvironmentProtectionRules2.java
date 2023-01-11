package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnvironmentProtectionRules2 {
    @JsonProperty("id")
    public Long id;
    public EnvironmentProtectionRules2 withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonProperty("node_id")
    public String nodeId;
    public EnvironmentProtectionRules2 withNodeId(String nodeId) {
        this.nodeId = nodeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reviewers")
    public EnvironmentProtectionRules2Reviewers[] reviewers;
    public EnvironmentProtectionRules2 withReviewers(EnvironmentProtectionRules2Reviewers[] reviewers) {
        this.reviewers = reviewers;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public EnvironmentProtectionRules2 withType(String type) {
        this.type = type;
        return this;
    }
}