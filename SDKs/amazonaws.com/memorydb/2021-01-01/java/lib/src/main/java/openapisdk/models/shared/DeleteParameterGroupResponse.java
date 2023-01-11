package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteParameterGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterGroup")
    public ParameterGroup parameterGroup;
    public DeleteParameterGroupResponse withParameterGroup(ParameterGroup parameterGroup) {
        this.parameterGroup = parameterGroup;
        return this;
    }
}