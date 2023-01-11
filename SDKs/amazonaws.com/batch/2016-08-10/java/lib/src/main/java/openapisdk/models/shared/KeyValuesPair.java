package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * KeyValuesPair
 * A filter name and value pair that's used to return a more specific list of results from a <code>ListJobs</code> API operation.
**/
public class KeyValuesPair {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public KeyValuesPair withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public KeyValuesPair withValues(String[] values) {
        this.values = values;
        return this;
    }
}