package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExclusionFilter
 * The exclusion filter
**/
public class ExclusionFilter {
    @JsonProperty("channelColumnId")
    public String channelColumnId;
    public ExclusionFilter withChannelColumnId(String channelColumnId) {
        this.channelColumnId = channelColumnId;
        return this;
    }
    @JsonProperty("enabled")
    public Boolean enabled;
    public ExclusionFilter withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonProperty("groupId")
    public String groupId;
    public ExclusionFilter withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ExclusionFilter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("operatorName")
    public String operatorName;
    public ExclusionFilter withOperatorName(String operatorName) {
        this.operatorName = operatorName;
        return this;
    }
    @JsonProperty("position")
    public Integer position;
    public ExclusionFilter withPosition(Integer position) {
        this.position = position;
        return this;
    }
    @JsonProperty("positionInGroup")
    public Integer positionInGroup;
    public ExclusionFilter withPositionInGroup(Integer positionInGroup) {
        this.positionInGroup = positionInGroup;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ExclusionFilter withValue(String value) {
        this.value = value;
        return this;
    }
}