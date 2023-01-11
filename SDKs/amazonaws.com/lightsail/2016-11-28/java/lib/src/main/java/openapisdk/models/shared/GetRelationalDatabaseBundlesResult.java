package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseBundlesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundles")
    public RelationalDatabaseBundle[] bundles;
    public GetRelationalDatabaseBundlesResult withBundles(RelationalDatabaseBundle[] bundles) {
        this.bundles = bundles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextPageToken")
    public String nextPageToken;
    public GetRelationalDatabaseBundlesResult withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}