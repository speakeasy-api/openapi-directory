package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CompositeModelProperty
 * Contains information about a composite model property on an asset.
**/
public class CompositeModelProperty {
    @JsonProperty("assetProperty")
    public Property assetProperty;
    public CompositeModelProperty withAssetProperty(Property assetProperty) {
        this.assetProperty = assetProperty;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CompositeModelProperty withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public CompositeModelProperty withType(String type) {
        this.type = type;
        return this;
    }
}