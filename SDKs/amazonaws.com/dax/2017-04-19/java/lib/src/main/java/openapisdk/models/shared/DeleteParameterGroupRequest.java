package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteParameterGroupRequest {
    @JsonProperty("ParameterGroupName")
    public String parameterGroupName;
    public DeleteParameterGroupRequest withParameterGroupName(String parameterGroupName) {
        this.parameterGroupName = parameterGroupName;
        return this;
    }
}