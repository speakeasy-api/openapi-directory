package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetProperty
 * Contains asset property information.
**/
public class AssetProperty {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public AssetProperty withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonProperty("dataType")
    public PropertyDataTypeEnum dataType;
    public AssetProperty withDataType(PropertyDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataTypeSpec")
    public String dataTypeSpec;
    public AssetProperty withDataTypeSpec(String dataTypeSpec) {
        this.dataTypeSpec = dataTypeSpec;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AssetProperty withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public AssetProperty withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public PropertyNotification notification;
    public AssetProperty withNotification(PropertyNotification notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public AssetProperty withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}