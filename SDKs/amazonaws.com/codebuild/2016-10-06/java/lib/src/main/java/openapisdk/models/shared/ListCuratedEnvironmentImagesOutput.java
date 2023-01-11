package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListCuratedEnvironmentImagesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platforms")
    public EnvironmentPlatform[] platforms;
    public ListCuratedEnvironmentImagesOutput withPlatforms(EnvironmentPlatform[] platforms) {
        this.platforms = platforms;
        return this;
    }
}