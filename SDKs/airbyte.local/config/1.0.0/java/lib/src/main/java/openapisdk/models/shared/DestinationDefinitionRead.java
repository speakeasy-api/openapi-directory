package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DestinationDefinitionRead {
    @JsonProperty("destinationDefinitionId")
    public String destinationDefinitionId;
    public DestinationDefinitionRead withDestinationDefinitionId(String destinationDefinitionId) {
        this.destinationDefinitionId = destinationDefinitionId;
        return this;
    }
    @JsonProperty("dockerImageTag")
    public String dockerImageTag;
    public DestinationDefinitionRead withDockerImageTag(String dockerImageTag) {
        this.dockerImageTag = dockerImageTag;
        return this;
    }
    @JsonProperty("dockerRepository")
    public String dockerRepository;
    public DestinationDefinitionRead withDockerRepository(String dockerRepository) {
        this.dockerRepository = dockerRepository;
        return this;
    }
    @JsonProperty("documentationUrl")
    public String documentationUrl;
    public DestinationDefinitionRead withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public String icon;
    public DestinationDefinitionRead withIcon(String icon) {
        this.icon = icon;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public DestinationDefinitionRead withName(String name) {
        this.name = name;
        return this;
    }
}