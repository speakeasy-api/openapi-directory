package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentPlatform
 * A set of Docker images that are related by platform and are managed by CodeBuild.
**/
public class EnvironmentPlatform {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("languages")
    public EnvironmentLanguage[] languages;
    public EnvironmentPlatform withLanguages(EnvironmentLanguage[] languages) {
        this.languages = languages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platform")
    public PlatformTypeEnum platform;
    public EnvironmentPlatform withPlatform(PlatformTypeEnum platform) {
        this.platform = platform;
        return this;
    }
}