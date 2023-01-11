package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Field
 * Describes the name and data type at a field.
**/
public class Field {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Field withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FieldTypeEnum type;
    public Field withType(FieldTypeEnum type) {
        this.type = type;
        return this;
    }
}