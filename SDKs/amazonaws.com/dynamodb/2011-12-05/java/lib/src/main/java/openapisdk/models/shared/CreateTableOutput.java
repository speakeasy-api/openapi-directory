package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateTableOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableDescription")
    public TableDescription tableDescription;
    public CreateTableOutput withTableDescription(TableDescription tableDescription) {
        this.tableDescription = tableDescription;
        return this;
    }
}