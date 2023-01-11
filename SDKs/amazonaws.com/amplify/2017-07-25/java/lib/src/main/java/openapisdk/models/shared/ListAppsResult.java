package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListAppsResult
 *  The result structure for an Amplify app list request. 
**/
public class ListAppsResult {
    @JsonProperty("apps")
    public App[] apps;
    public ListAppsResult withApps(App[] apps) {
        this.apps = apps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListAppsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}