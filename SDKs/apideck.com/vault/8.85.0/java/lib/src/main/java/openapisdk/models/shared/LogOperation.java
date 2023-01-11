package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LogOperation
 * The request as defined in OpenApi Spec.
**/
public class LogOperation {
    @JsonProperty("id")
    public String id;
    public LogOperation withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LogOperation withName(String name) {
        this.name = name;
        return this;
    }
}