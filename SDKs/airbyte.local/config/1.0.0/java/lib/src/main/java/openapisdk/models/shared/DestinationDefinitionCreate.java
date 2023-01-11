package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DestinationDefinitionCreate {
    @JsonProperty("dockerImageTag")
    public String dockerImageTag;
    public DestinationDefinitionCreate withDockerImageTag(String dockerImageTag) {
        this.dockerImageTag = dockerImageTag;
        return this;
    }
    @JsonProperty("dockerRepository")
    public String dockerRepository;
    public DestinationDefinitionCreate withDockerRepository(String dockerRepository) {
        this.dockerRepository = dockerRepository;
        return this;
    }
    @JsonProperty("documentationUrl")
    public String documentationUrl;
    public DestinationDefinitionCreate withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public String icon;
    public DestinationDefinitionCreate withIcon(String icon) {
        this.icon = icon;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DestinationDefinitionCreate withName(String name) {
        this.name = name;
        return this;
    }
}