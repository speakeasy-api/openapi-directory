package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetEntry
 * The reference to a dataset entry.
**/
public class DatasetEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("dataURI")
    public String dataURI;
    public DatasetEntry withDataUri(String dataURI) {
        this.dataURI = dataURI;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entryName")
    public String entryName;
    public DatasetEntry withEntryName(String entryName) {
        this.entryName = entryName;
        return this;
    }
}