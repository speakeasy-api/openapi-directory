package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRevisionsCountUsingGet200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisions")
    public Long revisions;
    public GetRevisionsCountUsingGet200ApplicationJsonData withRevisions(Long revisions) {
        this.revisions = revisions;
        return this;
    }
}