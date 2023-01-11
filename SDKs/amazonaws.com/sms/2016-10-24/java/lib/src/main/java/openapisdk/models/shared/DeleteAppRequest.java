package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteAppRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appId")
    public String appId;
    public DeleteAppRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceStopAppReplication")
    public Boolean forceStopAppReplication;
    public DeleteAppRequest withForceStopAppReplication(Boolean forceStopAppReplication) {
        this.forceStopAppReplication = forceStopAppReplication;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceTerminateApp")
    public Boolean forceTerminateApp;
    public DeleteAppRequest withForceTerminateApp(Boolean forceTerminateApp) {
        this.forceTerminateApp = forceTerminateApp;
        return this;
    }
}