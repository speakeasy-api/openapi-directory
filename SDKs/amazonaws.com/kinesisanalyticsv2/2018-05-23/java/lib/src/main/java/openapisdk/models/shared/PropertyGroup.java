package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PropertyGroup
 * Property key-value pairs passed into an application.
**/
public class PropertyGroup {
    @JsonProperty("PropertyGroupId")
    public String propertyGroupId;
    public PropertyGroup withPropertyGroupId(String propertyGroupId) {
        this.propertyGroupId = propertyGroupId;
        return this;
    }
    @JsonProperty("PropertyMap")
    public java.util.Map<String, String> propertyMap;
    public PropertyGroup withPropertyMap(java.util.Map<String, String> propertyMap) {
        this.propertyMap = propertyMap;
        return this;
    }
}