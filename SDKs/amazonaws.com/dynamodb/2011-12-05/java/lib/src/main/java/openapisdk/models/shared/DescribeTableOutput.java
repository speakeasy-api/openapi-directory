package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTableOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Table")
    public TableDescription table;
    public DescribeTableOutput withTable(TableDescription table) {
        this.table = table;
        return this;
    }
}