package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProtectionGroupRequest {
    @JsonProperty("Aggregation")
    public ProtectionGroupAggregationEnum aggregation;
    public CreateProtectionGroupRequest withAggregation(ProtectionGroupAggregationEnum aggregation) {
        this.aggregation = aggregation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Members")
    public String[] members;
    public CreateProtectionGroupRequest withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonProperty("Pattern")
    public ProtectionGroupPatternEnum pattern;
    public CreateProtectionGroupRequest withPattern(ProtectionGroupPatternEnum pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonProperty("ProtectionGroupId")
    public String protectionGroupId;
    public CreateProtectionGroupRequest withProtectionGroupId(String protectionGroupId) {
        this.protectionGroupId = protectionGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ProtectedResourceTypeEnum resourceType;
    public CreateProtectionGroupRequest withResourceType(ProtectedResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateProtectionGroupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}