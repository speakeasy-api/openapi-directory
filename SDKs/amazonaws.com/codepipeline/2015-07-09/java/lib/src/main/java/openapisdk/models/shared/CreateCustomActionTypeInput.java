package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateCustomActionTypeInput
 * Represents the input of a CreateCustomActionType operation.
**/
public class CreateCustomActionTypeInput {
    @JsonProperty("category")
    public ActionCategoryEnum category;
    public CreateCustomActionTypeInput withCategory(ActionCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationProperties")
    public ActionConfigurationProperty[] configurationProperties;
    public CreateCustomActionTypeInput withConfigurationProperties(ActionConfigurationProperty[] configurationProperties) {
        this.configurationProperties = configurationProperties;
        return this;
    }
    @JsonProperty("inputArtifactDetails")
    public ArtifactDetails inputArtifactDetails;
    public CreateCustomActionTypeInput withInputArtifactDetails(ArtifactDetails inputArtifactDetails) {
        this.inputArtifactDetails = inputArtifactDetails;
        return this;
    }
    @JsonProperty("outputArtifactDetails")
    public ArtifactDetails outputArtifactDetails;
    public CreateCustomActionTypeInput withOutputArtifactDetails(ArtifactDetails outputArtifactDetails) {
        this.outputArtifactDetails = outputArtifactDetails;
        return this;
    }
    @JsonProperty("provider")
    public String provider;
    public CreateCustomActionTypeInput withProvider(String provider) {
        this.provider = provider;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public ActionTypeSettings settings;
    public CreateCustomActionTypeInput withSettings(ActionTypeSettings settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateCustomActionTypeInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("version")
    public String version;
    public CreateCustomActionTypeInput withVersion(String version) {
        this.version = version;
        return this;
    }
}