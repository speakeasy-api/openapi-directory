package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Change
 * An object that contains the <code>ChangeType</code>, <code>Details</code>, and <code>Entity</code>.
**/
public class Change {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ChangeName")
    public String changeName;
    public Change withChangeName(String changeName) {
        this.changeName = changeName;
        return this;
    }
    @JsonProperty("ChangeType")
    public String changeType;
    public Change withChangeType(String changeType) {
        this.changeType = changeType;
        return this;
    }
    @JsonProperty("Details")
    public String details;
    public Change withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonProperty("Entity")
    public Entity entity;
    public Change withEntity(Entity entity) {
        this.entity = entity;
        return this;
    }
}