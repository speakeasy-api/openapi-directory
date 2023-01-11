package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldInfo
 * Details about the fields such as name of the field.
**/
public class FieldInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public FieldInfo withName(String name) {
        this.name = name;
        return this;
    }
}