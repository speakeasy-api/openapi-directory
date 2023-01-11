package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ControlSet
 *  A set of controls in Audit Manager. 
**/
public class ControlSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("controls")
    public Control[] controls;
    public ControlSet withControls(Control[] controls) {
        this.controls = controls;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ControlSet withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ControlSet withName(String name) {
        this.name = name;
        return this;
    }
}