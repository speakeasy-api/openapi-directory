package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Pagination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageSize")
    public Long pageSize;
    public Pagination withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rowOffset")
    public Long rowOffset;
    public Pagination withRowOffset(Long rowOffset) {
        this.rowOffset = rowOffset;
        return this;
    }
}