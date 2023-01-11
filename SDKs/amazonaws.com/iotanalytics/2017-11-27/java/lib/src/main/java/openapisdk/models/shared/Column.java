package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Column
 * Contains information about a column that stores your data.
**/
public class Column {
    @JsonProperty("name")
    public String name;
    public Column withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public Column withType(String type) {
        this.type = type;
        return this;
    }
}