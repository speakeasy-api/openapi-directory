package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeAppsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AppIds")
    public String[] appIds;
    public DescribeAppsRequest withAppIds(String[] appIds) {
        this.appIds = appIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StackId")
    public String stackId;
    public DescribeAppsRequest withStackId(String stackId) {
        this.stackId = stackId;
        return this;
    }
}