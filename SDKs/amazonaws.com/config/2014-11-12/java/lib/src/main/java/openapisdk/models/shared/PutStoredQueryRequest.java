package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutStoredQueryRequest {
    @JsonProperty("StoredQuery")
    public StoredQuery storedQuery;
    public PutStoredQueryRequest withStoredQuery(StoredQuery storedQuery) {
        this.storedQuery = storedQuery;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public PutStoredQueryRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}