package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateAppResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appSummary")
    public AppSummary appSummary;
    public CreateAppResponse withAppSummary(AppSummary appSummary) {
        this.appSummary = appSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverGroups")
    public ServerGroup[] serverGroups;
    public CreateAppResponse withServerGroups(ServerGroup[] serverGroups) {
        this.serverGroups = serverGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateAppResponse withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}