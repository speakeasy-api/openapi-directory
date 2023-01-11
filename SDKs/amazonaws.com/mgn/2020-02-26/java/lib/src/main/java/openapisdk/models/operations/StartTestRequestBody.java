package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartTestRequestBody {
    @JsonProperty("sourceServerIDs")
    public String[] sourceServerIDs;
    public StartTestRequestBody withSourceServerIDs(String[] sourceServerIDs) {
        this.sourceServerIDs = sourceServerIDs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public StartTestRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}