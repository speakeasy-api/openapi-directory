package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateLaunchProfileRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateLaunchProfileRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchProfileProtocolVersions")
    public String[] launchProfileProtocolVersions;
    public UpdateLaunchProfileRequestBody withLaunchProfileProtocolVersions(String[] launchProfileProtocolVersions) {
        this.launchProfileProtocolVersions = launchProfileProtocolVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateLaunchProfileRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("streamConfiguration")
    public UpdateLaunchProfileRequestBodyStreamConfiguration streamConfiguration;
    public UpdateLaunchProfileRequestBody withStreamConfiguration(UpdateLaunchProfileRequestBodyStreamConfiguration streamConfiguration) {
        this.streamConfiguration = streamConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("studioComponentIds")
    public String[] studioComponentIds;
    public UpdateLaunchProfileRequestBody withStudioComponentIds(String[] studioComponentIds) {
        this.studioComponentIds = studioComponentIds;
        return this;
    }
}