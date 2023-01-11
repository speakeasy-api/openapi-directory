package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateParameterGroupResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterGroup")
    public ParameterGroup parameterGroup;
    public CreateParameterGroupResponse withParameterGroup(ParameterGroup parameterGroup) {
        this.parameterGroup = parameterGroup;
        return this;
    }
}