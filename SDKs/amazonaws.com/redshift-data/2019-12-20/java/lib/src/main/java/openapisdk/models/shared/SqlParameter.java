package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SqlParameter
 * A parameter used in a SQL statement.
**/
public class SqlParameter {
    @JsonProperty("name")
    public String name;
    public SqlParameter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public SqlParameter withValue(String value) {
        this.value = value;
        return this;
    }
}