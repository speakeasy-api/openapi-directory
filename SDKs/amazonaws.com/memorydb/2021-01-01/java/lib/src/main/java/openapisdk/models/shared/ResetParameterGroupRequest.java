package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResetParameterGroupRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AllParameters")
    public Boolean allParameters;
    public ResetParameterGroupRequest withAllParameters(Boolean allParameters) {
        this.allParameters = allParameters;
        return this;
    }
    @JsonProperty("ParameterGroupName")
    public String parameterGroupName;
    public ResetParameterGroupRequest withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterNames")
    public String[] parameterNames;
    public ResetParameterGroupRequest withParameterNames(String[] parameterNames) {
        this.parameterNames = parameterNames;
        return this;
    }
}