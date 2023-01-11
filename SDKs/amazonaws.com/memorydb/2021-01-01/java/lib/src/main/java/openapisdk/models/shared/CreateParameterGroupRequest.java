package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateParameterGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateParameterGroupRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Family")
    public String family;
    public CreateParameterGroupRequest withFamily(String family) {
        this.family = family;
        return this;
    }
    @JsonProperty("ParameterGroupName")
    public String parameterGroupName;
    public CreateParameterGroupRequest withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateParameterGroupRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}