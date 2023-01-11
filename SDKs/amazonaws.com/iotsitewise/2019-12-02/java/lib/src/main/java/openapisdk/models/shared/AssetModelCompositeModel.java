package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetModelCompositeModel
 * Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
**/
public class AssetModelCompositeModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public AssetModelCompositeModel withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetModelCompositeModel withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public Object properties;
    public AssetModelCompositeModel withProperties(Object properties) {
        this.properties = properties;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public AssetModelCompositeModel withType(String type) {
        this.type = type;
        return this;
    }
}