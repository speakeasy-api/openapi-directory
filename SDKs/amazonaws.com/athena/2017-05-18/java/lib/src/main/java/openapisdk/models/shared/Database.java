package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Database
 * Contains metadata information for a database in a data catalog.
**/
public class Database {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Database withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Database withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Parameters")
    public java.util.Map<String, String> parameters;
    public Database withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
}