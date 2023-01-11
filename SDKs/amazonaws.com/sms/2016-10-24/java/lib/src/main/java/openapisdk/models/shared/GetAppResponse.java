package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAppResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appSummary")
    public AppSummary appSummary;
    public GetAppResponse withAppSummary(AppSummary appSummary) {
        this.appSummary = appSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroups")
    public ServerGroup[] serverGroups;
    public GetAppResponse withServerGroups(ServerGroup[] serverGroups) {
        this.serverGroups = serverGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public GetAppResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}