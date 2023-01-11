package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Property
 * Contains asset property information.
**/
public class Property {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public Property withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonProperty("dataType")
    public PropertyDataTypeEnum dataType;
    public Property withDataType(PropertyDataTypeEnum dataType) {
        this.dataType = dataType;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public Property withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Property withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("notification")
    public PropertyNotification notification;
    public Property withNotification(PropertyNotification notification) {
        this.notification = notification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public PropertyType type;
    public Property withType(PropertyType type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unit")
    public String unit;
    public Property withUnit(String unit) {
        this.unit = unit;
        return this;
    }
}