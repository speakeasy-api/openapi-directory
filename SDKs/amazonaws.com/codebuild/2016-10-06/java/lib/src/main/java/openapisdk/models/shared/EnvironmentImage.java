package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EnvironmentImage
 * Information about a Docker image that is managed by CodeBuild.
**/
public class EnvironmentImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public EnvironmentImage withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public EnvironmentImage withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versions")
    public String[] versions;
    public EnvironmentImage withVersions(String[] versions) {
        this.versions = versions;
        return this;
    }
}