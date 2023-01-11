package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Parent
 * A parent label for a label. A label can have 0, 1, or more parents. 
**/
public class Parent {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Parent withName(String name) {
        this.name = name;
        return this;
    }
}