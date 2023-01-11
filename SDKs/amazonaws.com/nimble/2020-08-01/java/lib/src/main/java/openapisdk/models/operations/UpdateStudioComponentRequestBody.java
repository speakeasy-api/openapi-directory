package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStudioComponentRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public UpdateStudioComponentRequestBodyConfiguration configuration;
    public UpdateStudioComponentRequestBody withConfiguration(UpdateStudioComponentRequestBodyConfiguration configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateStudioComponentRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ec2SecurityGroupIds")
    public String[] ec2SecurityGroupIds;
    public UpdateStudioComponentRequestBody withEc2SecurityGroupIds(String[] ec2SecurityGroupIds) {
        this.ec2SecurityGroupIds = ec2SecurityGroupIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("initializationScripts")
    public openapisdk.models.shared.StudioComponentInitializationScript[] initializationScripts;
    public UpdateStudioComponentRequestBody withInitializationScripts(openapisdk.models.shared.StudioComponentInitializationScript[] initializationScripts) {
        this.initializationScripts = initializationScripts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateStudioComponentRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("scriptParameters")
    public openapisdk.models.shared.ScriptParameterKeyValue[] scriptParameters;
    public UpdateStudioComponentRequestBody withScriptParameters(openapisdk.models.shared.ScriptParameterKeyValue[] scriptParameters) {
        this.scriptParameters = scriptParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subtype")
    public UpdateStudioComponentRequestBodySubtypeEnum subtype;
    public UpdateStudioComponentRequestBody withSubtype(UpdateStudioComponentRequestBodySubtypeEnum subtype) {
        this.subtype = subtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UpdateStudioComponentRequestBodyTypeEnum type;
    public UpdateStudioComponentRequestBody withType(UpdateStudioComponentRequestBodyTypeEnum type) {
        this.type = type;
        return this;
    }
}