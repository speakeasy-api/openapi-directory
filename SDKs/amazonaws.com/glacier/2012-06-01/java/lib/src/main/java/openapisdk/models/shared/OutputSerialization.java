package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OutputSerialization
 * Describes how the select output is serialized.
**/
public class OutputSerialization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csv")
    public CsvOutput csv;
    public OutputSerialization withCsv(CsvOutput csv) {
        this.csv = csv;
        return this;
    }
}