package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Row
 * The rows that comprise a query result table.
**/
public class Row {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Data")
    public Datum[] data;
    public Row withData(Datum[] data) {
        this.data = data;
        return this;
    }
}