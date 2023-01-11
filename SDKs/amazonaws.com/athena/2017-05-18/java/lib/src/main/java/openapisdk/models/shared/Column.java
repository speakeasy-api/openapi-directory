package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Column
 * Contains metadata for a column in a table.
**/
public class Column {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Comment")
    public String comment;
    public Column withComment(String comment) {
        this.comment = comment;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public Column withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public Column withType(String type) {
        this.type = type;
        return this;
    }
}