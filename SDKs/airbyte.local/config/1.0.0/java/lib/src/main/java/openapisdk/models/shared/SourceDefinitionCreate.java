package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceDefinitionCreate {
    @JsonProperty("dockerImageTag")
    public String dockerImageTag;
    public SourceDefinitionCreate withDockerImageTag(String dockerImageTag) {
        this.dockerImageTag = dockerImageTag;
        return this;
    }
    @JsonProperty("dockerRepository")
    public String dockerRepository;
    public SourceDefinitionCreate withDockerRepository(String dockerRepository) {
        this.dockerRepository = dockerRepository;
        return this;
    }
    @JsonProperty("documentationUrl")
    public String documentationUrl;
    public SourceDefinitionCreate withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public String icon;
    public SourceDefinitionCreate withIcon(String icon) {
        this.icon = icon;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SourceDefinitionCreate withName(String name) {
        this.name = name;
        return this;
    }
}