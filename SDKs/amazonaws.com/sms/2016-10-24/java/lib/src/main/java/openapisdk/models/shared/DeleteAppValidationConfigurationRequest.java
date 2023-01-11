package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteAppValidationConfigurationRequest {
    @JsonProperty("appId")
    public String appId;
    public DeleteAppValidationConfigurationRequest withAppId(String appId) {
        this.appId = appId;
        return this;
    }
}