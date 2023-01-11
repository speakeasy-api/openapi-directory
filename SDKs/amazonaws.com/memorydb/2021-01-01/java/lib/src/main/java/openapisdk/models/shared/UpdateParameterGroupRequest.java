package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateParameterGroupRequest {
    @JsonProperty("ParameterGroupName")
    public String parameterGroupName;
    public UpdateParameterGroupRequest withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    @JsonProperty("ParameterNameValues")
    public ParameterNameValue[] parameterNameValues;
    public UpdateParameterGroupRequest withParameterNameValues(ParameterNameValue[] parameterNameValues) {
        this.parameterNameValues = parameterNameValues;
        return this;
    }
}