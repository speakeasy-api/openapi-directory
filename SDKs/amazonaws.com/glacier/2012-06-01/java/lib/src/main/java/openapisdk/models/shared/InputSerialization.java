package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputSerialization
 * Describes how the archive is serialized.
**/
public class InputSerialization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csv")
    public CsvInput csv;
    public InputSerialization withCsv(CsvInput csv) {
        this.csv = csv;
        return this;
    }
}