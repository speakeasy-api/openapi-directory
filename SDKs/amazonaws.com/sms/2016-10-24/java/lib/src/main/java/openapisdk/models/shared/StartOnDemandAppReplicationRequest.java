package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartOnDemandAppReplicationRequest {
    @JsonProperty("appId")
    public String appId;
    public StartOnDemandAppReplicationRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public StartOnDemandAppReplicationRequest withDescription(String description) {
        this.description = description;
        return this;
    }
}