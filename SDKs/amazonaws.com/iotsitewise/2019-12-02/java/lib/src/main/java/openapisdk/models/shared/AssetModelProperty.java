package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetModelProperty
 * Contains information about an asset model property.
**/
public class AssetModelProperty {
    @JsonProperty("dataType")
    public PropertyDataTypeEnum dataType;
    public AssetModelProperty withDataType(PropertyDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataTypeSpec")
    public String dataTypeSpec;
    public AssetModelProperty withDataTypeSpec(String dataTypeSpec) {
        this.dataTypeSpec = dataTypeSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public AssetModelProperty withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetModelProperty withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public PropertyType type;
    public AssetModelProperty withType(PropertyType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public AssetModelProperty withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}