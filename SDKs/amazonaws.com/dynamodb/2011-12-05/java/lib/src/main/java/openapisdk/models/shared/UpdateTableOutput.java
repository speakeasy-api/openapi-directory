package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateTableOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TableDescription")
    public TableDescription tableDescription;
    public UpdateTableOutput withTableDescription(TableDescription tableDescription) {
        this.tableDescription = tableDescription;
        return this;
    }
}