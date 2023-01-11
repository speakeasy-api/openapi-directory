package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetActiveNamesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("activeNames")
    public String[] activeNames;
    public GetActiveNamesResult withActiveNames(String[] activeNames) {
        this.activeNames = activeNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetActiveNamesResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}