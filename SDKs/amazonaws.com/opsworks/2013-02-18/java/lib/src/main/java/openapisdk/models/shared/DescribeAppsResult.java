package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DescribeAppsResult
 * Contains the response to a <code>DescribeApps</code> request.
**/
public class DescribeAppsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Apps")
    public App[] apps;
    public DescribeAppsResult withApps(App[] apps) {
        this.apps = apps;
        return this;
    }
}