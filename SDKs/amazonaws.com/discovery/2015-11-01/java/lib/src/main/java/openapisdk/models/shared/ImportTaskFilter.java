package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportTaskFilter
 * <p>A name-values pair of elements you can use to filter the results when querying your import tasks. Currently, wildcards are not supported for filters.</p> <note> <p>When filtering by import status, all other filter values are ignored.</p> </note>
**/
public class ImportTaskFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public ImportTaskFilterNameEnum name;
    public ImportTaskFilter withName(ImportTaskFilterNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public String[] values;
    public ImportTaskFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}