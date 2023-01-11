package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SuggestStatus
 * Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).
**/
public class SuggestStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rid")
    public String rid;
    public SuggestStatus withRid(String rid) {
        this.rid = rid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timems")
    public Long timems;
    public SuggestStatus withTimems(Long timems) {
        this.timems = timems;
        return this;
    }
}