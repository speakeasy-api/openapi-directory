package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActionTarget
 * An <code>ActionTarget</code> object.
**/
public class ActionTarget {
    @JsonProperty("ActionTargetArn")
    public String actionTargetArn;
    public ActionTarget withActionTargetArn(String actionTargetArn) {
        this.actionTargetArn = actionTargetArn;
        return this;
    }
    @JsonProperty("Description")
    public String description;
    public ActionTarget withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public ActionTarget withName(String name) {
        this.name = name;
        return this;
    }
}