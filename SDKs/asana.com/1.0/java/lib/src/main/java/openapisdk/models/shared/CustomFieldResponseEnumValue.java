package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomFieldResponseEnumValue
 * *Conditional*. Only relevant for custom fields of type `enum`. This object is the chosen value of an enum custom field.
**/
public class CustomFieldResponseEnumValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public String color;
    public CustomFieldResponseEnumValue withColor(String color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public CustomFieldResponseEnumValue withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public CustomFieldResponseEnumValue withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomFieldResponseEnumValue withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public CustomFieldResponseEnumValue withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}