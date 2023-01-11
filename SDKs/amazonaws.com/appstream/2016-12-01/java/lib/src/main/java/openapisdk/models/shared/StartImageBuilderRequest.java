package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartImageBuilderRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppstreamAgentVersion")
    public String appstreamAgentVersion;
    public StartImageBuilderRequest withAppstreamAgentVersion(String appstreamAgentVersion) {
        this.appstreamAgentVersion = appstreamAgentVersion;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public StartImageBuilderRequest withName(String name) {
        this.name = name;
        return this;
    }
}