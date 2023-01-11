package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CloudWatchDashboard
 * Information about a CloudWatch dashboard.
**/
public class CloudWatchDashboard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public CloudWatchDashboard withName(String name) {
        this.name = name;
        return this;
    }
}