package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBundlesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeInactive")
    public Boolean includeInactive;
    public GetBundlesRequest withIncludeInactive(Boolean includeInactive) {
        this.includeInactive = includeInactive;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetBundlesRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
}