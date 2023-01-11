package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetCompositeModel
 * Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
**/
public class AssetCompositeModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AssetCompositeModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetCompositeModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("properties")
    public Object properties;
    public AssetCompositeModel withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AssetCompositeModel withType(String type) {
        this.type = type;
        return this;
    }
}