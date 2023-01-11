package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TableMember
 * The properties of a table. 
**/
public class TableMember {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public TableMember withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schema")
    public String schema;
    public TableMember withSchema(String schema) {
        this.schema = schema;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public TableMember withType(String type) {
        this.type = type;
        return this;
    }
}