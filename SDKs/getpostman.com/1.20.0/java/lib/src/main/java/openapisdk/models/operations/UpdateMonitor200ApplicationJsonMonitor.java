package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMonitor200ApplicationJsonMonitor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdateMonitor200ApplicationJsonMonitor withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateMonitor200ApplicationJsonMonitor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("uid")
    public String uid;
    public UpdateMonitor200ApplicationJsonMonitor withUid(String uid) {
        this.uid = uid;
        return this;
    }
}