package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRevisionsCountUsingPost200ApplicationJsonData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revisions")
    public Long revisions;
    public GetRevisionsCountUsingPost200ApplicationJsonData withRevisions(Long revisions) {
        this.revisions = revisions;
        return this;
    }
}