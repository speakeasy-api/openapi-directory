package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetModelCompositeModelDefinition
 * Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
**/
public class AssetModelCompositeModelDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AssetModelCompositeModelDefinition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetModelCompositeModelDefinition withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public AssetModelCompositeModelDefinition withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AssetModelCompositeModelDefinition withType(String type) {
        this.type = type;
        return this;
    }
}