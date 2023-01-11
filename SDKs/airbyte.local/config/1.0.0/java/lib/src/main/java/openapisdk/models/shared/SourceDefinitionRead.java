package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceDefinitionRead {
    @JsonProperty("dockerImageTag")
    public String dockerImageTag;
    public SourceDefinitionRead withDockerImageTag(String dockerImageTag) {
        this.dockerImageTag = dockerImageTag;
        return this;
    }
    @JsonProperty("dockerRepository")
    public String dockerRepository;
    public SourceDefinitionRead withDockerRepository(String dockerRepository) {
        this.dockerRepository = dockerRepository;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentationUrl")
    public String documentationUrl;
    public SourceDefinitionRead withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public String icon;
    public SourceDefinitionRead withIcon(String icon) {
        this.icon = icon;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public SourceDefinitionRead withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sourceDefinitionId")
    public String sourceDefinitionId;
    public SourceDefinitionRead withSourceDefinitionId(String sourceDefinitionId) {
        this.sourceDefinitionId = sourceDefinitionId;
        return this;
    }
}