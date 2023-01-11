package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartCutoverRequestBody {
    @JsonProperty("sourceServerIDs")
    public String[] sourceServerIDs;
    public StartCutoverRequestBody withSourceServerIDs(String[] sourceServerIDs) {
        this.sourceServerIDs = sourceServerIDs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StartCutoverRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}