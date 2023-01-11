package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClassCreation
 * Creation of a classroom
**/
public class ClassCreation {
    @JsonProperty("name")
    public String name;
    public ClassCreation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public String section;
    public ClassCreation withSection(String section) {
        this.section = section;
        return this;
    }
}