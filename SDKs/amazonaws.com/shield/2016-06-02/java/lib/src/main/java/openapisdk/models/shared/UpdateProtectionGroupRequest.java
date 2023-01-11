package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProtectionGroupRequest {
    @JsonProperty("Aggregation")
    public ProtectionGroupAggregationEnum aggregation;
    public UpdateProtectionGroupRequest withAggregation(ProtectionGroupAggregationEnum aggregation) {
        this.aggregation = aggregation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Members")
    public String[] members;
    public UpdateProtectionGroupRequest withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonProperty("Pattern")
    public ProtectionGroupPatternEnum pattern;
    public UpdateProtectionGroupRequest withPattern(ProtectionGroupPatternEnum pattern) {
        this.pattern = pattern;
        return this;
    }
    @JsonProperty("ProtectionGroupId")
    public String protectionGroupId;
    public UpdateProtectionGroupRequest withProtectionGroupId(String protectionGroupId) {
        this.protectionGroupId = protectionGroupId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceType")
    public ProtectedResourceTypeEnum resourceType;
    public UpdateProtectionGroupRequest withResourceType(ProtectedResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}