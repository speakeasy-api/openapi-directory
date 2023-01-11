package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchStatus
 * Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
**/
public class SearchStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rid")
    public String rid;
    public SearchStatus withRid(String rid) {
        this.rid = rid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timems")
    public Long timems;
    public SearchStatus withTimems(Long timems) {
        this.timems = timems;
        return this;
    }
}