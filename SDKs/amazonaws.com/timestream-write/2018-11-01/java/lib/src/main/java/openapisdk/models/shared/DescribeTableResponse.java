package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeTableResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Table")
    public Table table;
    public DescribeTableResponse withTable(Table table) {
        this.table = table;
        return this;
    }
}