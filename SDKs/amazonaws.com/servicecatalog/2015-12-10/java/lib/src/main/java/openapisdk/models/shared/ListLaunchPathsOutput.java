package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListLaunchPathsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchPathSummaries")
    public LaunchPathSummary[] launchPathSummaries;
    public ListLaunchPathsOutput withLaunchPathSummaries(LaunchPathSummary[] launchPathSummaries) {
        this.launchPathSummaries = launchPathSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListLaunchPathsOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}