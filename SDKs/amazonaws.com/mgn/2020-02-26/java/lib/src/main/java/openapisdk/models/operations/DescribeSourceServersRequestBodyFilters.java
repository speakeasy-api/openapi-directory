package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeSourceServersRequestBodyFilters
 * Request to filter Source Servers list.
**/
public class DescribeSourceServersRequestBodyFilters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isArchived")
    public Boolean isArchived;
    public DescribeSourceServersRequestBodyFilters withIsArchived(Boolean isArchived) {
        this.isArchived = isArchived;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sourceServerIDs")
    public String[] sourceServerIDs;
    public DescribeSourceServersRequestBodyFilters withSourceServerIDs(String[] sourceServerIDs) {
        this.sourceServerIDs = sourceServerIDs;
        return this;
    }
}