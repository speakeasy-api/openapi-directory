package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ColumnWildcard
 * A wildcard object, consisting of an optional list of excluded column names or indexes.
**/
public class ColumnWildcard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExcludedColumnNames")
    public String[] excludedColumnNames;
    public ColumnWildcard withExcludedColumnNames(String[] excludedColumnNames) {
        this.excludedColumnNames = excludedColumnNames;
        return this;
    }
}