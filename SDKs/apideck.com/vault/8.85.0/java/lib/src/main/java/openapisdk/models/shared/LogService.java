package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LogService
 * Apideck service provider associated with request.
**/
public class LogService {
    @JsonProperty("id")
    public String id;
    public LogService withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public LogService withName(String name) {
        this.name = name;
        return this;
    }
}