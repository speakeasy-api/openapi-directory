package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetLaunchConfigurationRequestBody {
    @JsonProperty("sourceServerID")
    public String sourceServerID;
    public GetLaunchConfigurationRequestBody withSourceServerId(String sourceServerID) {
        this.sourceServerID = sourceServerID;
        return this;
    }
}