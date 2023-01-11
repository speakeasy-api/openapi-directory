package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateStudioComponentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public CreateStudioComponentRequestBodyConfiguration configuration;
    public CreateStudioComponentRequestBody withConfiguration(CreateStudioComponentRequestBodyConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateStudioComponentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2SecurityGroupIds")
    public String[] ec2SecurityGroupIds;
    public CreateStudioComponentRequestBody withEc2SecurityGroupIds(String[] ec2SecurityGroupIds) {
        this.ec2SecurityGroupIds = ec2SecurityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializationScripts")
    public openapisdk.models.shared.StudioComponentInitializationScript[] initializationScripts;
    public CreateStudioComponentRequestBody withInitializationScripts(openapisdk.models.shared.StudioComponentInitializationScript[] initializationScripts) {
        this.initializationScripts = initializationScripts;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateStudioComponentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptParameters")
    public openapisdk.models.shared.ScriptParameterKeyValue[] scriptParameters;
    public CreateStudioComponentRequestBody withScriptParameters(openapisdk.models.shared.ScriptParameterKeyValue[] scriptParameters) {
        this.scriptParameters = scriptParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtype")
    public CreateStudioComponentRequestBodySubtypeEnum subtype;
    public CreateStudioComponentRequestBody withSubtype(CreateStudioComponentRequestBodySubtypeEnum subtype) {
        this.subtype = subtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateStudioComponentRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("type")
    public CreateStudioComponentRequestBodyTypeEnum type;
    public CreateStudioComponentRequestBody withType(CreateStudioComponentRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}