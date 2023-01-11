package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAppRequest {
    @JsonProperty("AppId")
    public String appId;
    public DeleteAppRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}